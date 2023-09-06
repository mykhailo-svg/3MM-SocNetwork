import { AxiosResponse } from "axios";
import axiosAPI from "../http/axios";
import { IUser } from "../@types/Auth/IUser";

export default class UserService {
  static async fetchUsers(
    email: string,
    password: string
  ): Promise<AxiosResponse<IUser[]>> {
    return axiosAPI.get<IUser[]>("/users");
  }
}
