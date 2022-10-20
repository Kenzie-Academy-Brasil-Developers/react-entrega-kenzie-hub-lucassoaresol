import { FieldValues } from "react-hook-form";
import { api } from "./api";

export interface ipostTechs{
    id:string;
    title: string;
    status: string;
}

export async function postTechs(data:FieldValues):Promise<ipostTechs>{
    const { data: response } = await api.post<ipostTechs>('users/techs', data)
    return response
}

export async function putTechs(data:FieldValues,id:string):Promise<ipostTechs>{
    const { data: response } = await api.put<ipostTechs>(`users/techs/${id}`, data);
    return response
}