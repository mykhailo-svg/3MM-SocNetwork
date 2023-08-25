import {AxiosResponse} from "axios";
import axiosAPI from "../http/axios";
import { AuthResponse } from "../@types/Auth/AuthResponse";



export default class AuthService {
    static async login(email:string , password:string): Promise<AxiosResponse<AuthResponse>>{

        return axiosAPI.post<AuthResponse>('/login',{email,password})
      

    }
    static async registration(email:string , password:string): Promise<AxiosResponse<AuthResponse>>{

        return axiosAPI.post<AuthResponse>('/registration',{email,password})
      

    }
    static async logout(): Promise<void>{

        return axiosAPI.post('/logout')
      

    }
}