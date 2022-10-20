import { FieldValues } from "react-hook-form";
import { api } from "./api";
import { ipostTechs } from "./apiTechs";

export interface igetUser{
    id: string;
    name: string;
    course_module: string;
    techs: ipostTechs[] | [];
}

export async function getUser(token:string):Promise<igetUser> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<igetUser>('profile');
  return data
}

export interface ipostUser{
    token: string;
    user: igetUser;
}

export async function postUser(data:FieldValues):Promise<ipostUser> {
    const {data: response} = await api.post<ipostUser>('sessions', data);
    api.defaults.headers.authorization = `Bearer ${response.token}`; 
    return response
}

export async function postUserCreate(data:FieldValues) {
  const {data: response} = await api.post('users', data);
  return response
}
