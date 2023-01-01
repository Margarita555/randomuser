import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { errorSelector, loadingSelector, pageSelector, usersSelector } from "../../modules/users/selectors";
import * as types from "../../modules/users/actionTypes";
import { UserElement } from "../../modules/users";
import { StyledUsersList } from "./styles";
import { Spinner } from "../../shared/components";
import { ErrorMessage } from "../../shared/styles";

// useEffect(() => {
//   const results = axios.get(`https://randomuser.me/api/?results=20&seed=2fe44ec12de9391d`).then(results => console.log("all", results.data));
//   const page1 = axios
//     .get(`https://randomuser.me/api/?page=1&results=10&seed=2fe44ec12de9391d`)
//     .then(results => console.log("page1", results.data.results));
//   const page2 = axios
//     .get(`https://randomuser.me/api/?page=2&results=10&seed=2fe44ec12de9391d`)
//     .then(results => console.log("page2", results.data.results));
// }, []);

const UsersPage = () => {
  const maxUsersAmount = 20;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const pageNumber = useSelector(pageSelector);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastUserElement = useCallback(
    (node: HTMLLIElement) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && users?.length && users?.length < maxUsersAmount) {
          dispatch({ type: types.PAGE_UPDATE_REQUESTED });
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, users?.length, dispatch],
  );

  useEffect(() => {
    dispatch({ type: types.USERS_FETCH_REQUESTED, payload: pageNumber });
  }, [dispatch, pageNumber]);

  return (
    <section>
      {error && <ErrorMessage>{t("somethingWentWrong")}</ErrorMessage>}
      {isLoading && <Spinner />}
      <StyledUsersList>
        {users?.map((user, index) => {
          if (users.length === index + 1) {
            return <UserElement innerRef={lastUserElement} key={user.id.value} user={user} />;
          } else {
            return <UserElement key={user.login.md5} user={user} />;
          }
        })}
      </StyledUsersList>
    </section>
  );
};
export default UsersPage;
