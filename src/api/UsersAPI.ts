import axios from "axios";
import { BASE_API_URL } from "./constants";
import { UsersEndpoints } from "./endpoints";
import { IUser } from "../modules/users/models";

const { GET_USERS } = UsersEndpoints;

export async function fetchUsers(): Promise<IUser[]> {
  const { data } = await axios.get(`${BASE_API_URL}${GET_USERS}`);
  return data.results;
}
