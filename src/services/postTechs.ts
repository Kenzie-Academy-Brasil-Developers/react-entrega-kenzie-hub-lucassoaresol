import { api } from "./api";

export interface ipostTechs{
    id:string;
    title: string;
    status: string;
}

export interface ipostTechsProps{
    data:{
        title: string;
        status: string;
    }
}

export async function postTechs(data:ipostTechsProps):Promise<ipostTechs>{
    const { data: response } = await api.post<ipostTechs>('users/techs', data)
    return response
}
