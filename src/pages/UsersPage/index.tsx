import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { errorSelector, loadingSelector, pageSelector, usersSelector } from "../../modules/users/selectors";
import * as types from "../../modules/users/actionTypes";
import { UserElement } from "../../modules/users";
import { StyledUsersList } from "./styles";
import { Spinner } from "../../shared/components";
import { ErrorMessage } from "../../shared/styles";

const UsersPage = () => {
  const MAX_USERS_AMOUNT = 20;
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
        if (entries[0].isIntersecting && users?.length && users?.length < MAX_USERS_AMOUNT) {
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
      {error && <ErrorMessage>{t("somethingWrong")}</ErrorMessage>}
      {isLoading && <Spinner />}
      <StyledUsersList>
        {users?.map((user, index) => {
          if (users.length === index + 1) {
            return <UserElement innerRef={lastUserElement} key={user.login.md5} user={user} />;
          } else {
            return <UserElement key={user.login.md5} user={user} />;
          }
        })}
      </StyledUsersList>
    </section>
  );
};
export default UsersPage;
