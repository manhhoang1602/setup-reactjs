import { IResBody } from '../../services/Interfaces';

export interface IResLoginData {
  profilePictureUrl: string;
  id: number;
  userId: number;
  userName: string;
  token: string;
  email: string;
  status: number;
  profilePicturePath: string;
}

export interface IResLogin extends IResBody {
  data: IResLoginData;
}
