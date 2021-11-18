import { Baservices, IApiResponse } from '../../services/Basevices';
import { IResLogin } from './Interfaces';

export const loginAPI = async (reqData: { user_name: string; password: string }): Promise<IApiResponse<IResLogin>> => {
  return Baservices.putMethod(`/authen/login`, reqData);
};
