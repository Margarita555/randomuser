import axios from "axios";
import { BASE_API_URL, USERS_PER_PAGE, SEED } from "./constants";
import { UsersEndpoints } from "./endpoints";
import { IUser } from "../modules/users/models";

const { GET_USERS } = UsersEndpoints;

export async function fetchUsers(pageNumber: number): Promise<IUser[]> {
  const { data } = await axios.get(`${BASE_API_URL}${GET_USERS(pageNumber, USERS_PER_PAGE, SEED)}`);
  return data.results;
}
