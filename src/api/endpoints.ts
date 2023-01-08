export const UsersEndpoints = {
  GET_USERS: (pageNumber: number, USERS_PER_PAGE: number, SEED: string) => `?page=${pageNumber}&results=${USERS_PER_PAGE}&seed=${SEED}`,
};
