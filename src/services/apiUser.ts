import { api } from "./api";
import { ipostTechs } from "./postTechs";

export interface igetUser{
    id: string;
    name: string;
    course_module: string;
    techs: ipostTechs[] | [];
}

export async function getUser():Promise<igetUser> {
    const { data } = await api.get<igetUser>('profile');
    return data
}

export interface ipostUserProps{
    data: {
        email: string;
        password: string;
    }
}

export interface ipostUser{
    token: string;
    user: igetUser;
}

export async function postUser(data:ipostUserProps):Promise<ipostUser> {
    const {data: response} = await api.post<ipostUser>('sessions', data);
    return response
}
