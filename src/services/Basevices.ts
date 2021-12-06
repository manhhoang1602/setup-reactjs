import Axios from 'axios';
import humps from 'humps';
import { Notification } from '../commons/notification/Notification';

export interface IApiResponse<T> {
  status: number;
  body: T;
}

// CONFIG SERVICE
export const TOKEN_NAME: string = process.env.REACT_APP_TOKEN_NAME as string;
export const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

const getToken = (): string | null => localStorage.getItem(TOKEN_NAME);

// METHODS CALL API
export const apiCall = async (
  url: string,
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  data: { [key: string]: any } | undefined,
  isToken: boolean = true,
  token?: string
): Promise<IApiResponse<any>> => {
  let headers: { [key: string]: string } = {};
  headers['Content-Type'] = 'application/json';

  if (token) {
    headers[TOKEN_NAME] = token;
  } else {
    if (isToken) headers[TOKEN_NAME] = getToken() || '';
  }

  return new Promise<any>((resolve, reject) => {
    Axios({
      url: BASE_URL + url,
      method: method,
      headers: headers,
      data: data ? JSON.stringify(data) : undefined,
    })
      .then((next) => {
        // check and log error
        // end
        if (next.data.status === 1) {
          resolve({
            body: humps.camelizeKeys(next.data),
            status: next.status,
          });
        } else {
          reject({
            body: humps.camelizeKeys(next.data),
            status: next.status,
          });
          Notification.PushNotification('ERROR', next.data.message);
        }
      })
      .catch((error) => {
        try {
          reject({
            body: humps.camelizeKeys(error.response.data),
            status: error.response.error,
          });
        } catch (e) {
          reject({
            body: e,
            status: 500,
          });
        }
        Notification.PushNotification('ERROR', 'Đã có lỗi xảy ra vui lòng thao tác lại.');
      });
  });
};

export class Baservices {
  public static async getMethod(_url: string, _isToken: boolean, _token?: string): Promise<IApiResponse<any>> {
    return apiCall(_url, 'GET', undefined, _isToken);
  }

  public static async postMethod(
    _url: string,
    _data?: any,
    _isToken?: boolean,
    _token?: string
  ): Promise<IApiResponse<any>> {
    return apiCall(_url, 'POST', _data, _isToken);
  }

  public static async putMethod(
    _url: string,
    _data?: any,
    _isToken?: boolean,
    _token?: string
  ): Promise<IApiResponse<any>> {
    return apiCall(_url, 'PUT', _data, _isToken);
  }

  public static async deleteMethod(
    _url: string,
    _data?: any,
    _isToken?: boolean,
    _token?: string
  ): Promise<IApiResponse<any>> {
    return apiCall(_url, 'DELETE', _data, _isToken);
  }
}
