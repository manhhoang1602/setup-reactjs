import { IResBody } from '../../services/Interfaces';

export interface IResLoginData {
  profile_picture_url: string;
  id: number;
  user_id: number;
  user_name: string;
  token: string;
  email: string;
  status: number;
  profile_picture_path: string;
}

export interface IResLogin extends IResBody {
  data: IResLoginData;
}
