export const UsersEndpoints = {
  // GET_USERS: (pageNumber: number) => `?page=${pageNumber}&results=10&seed=2fe44ec12de9391d`,
  GET_USERS: (pageNumber: number, USERS_PER_PAGE: number, SEED: string) => `?page=${pageNumber}&results=${USERS_PER_PAGE}&seed=${SEED}`,
};
