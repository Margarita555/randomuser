import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { errorSelector, loadingSelector, pageSelector, usersSelector } from "../../modules/users/selectors";
import { USERS_PER_PAGE } from "../../api/constants";
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
  const pageMatchesUsersLength = users && users.length / USERS_PER_PAGE === pageNumber;

  const lastUserElement = useCallback(
    (node: HTMLLIElement) => {
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
    [users?.length, dispatch],
  );

  useEffect(() => {
    if (!pageMatchesUsersLength) {
      dispatch({ type: types.USERS_FETCH_REQUESTED, payload: pageNumber });
    }
  }, [dispatch, pageNumber, pageMatchesUsersLength]);

  const addRefAttribute = (index: number) => {
    const lastUser = users && users.length === index + 1;
    if (lastUser) {
      return { innerRef: lastUserElement };
    } else {
      return {};
    }
  };

  return (
    <section>
      {error && <ErrorMessage>{t("somethingWrong")}</ErrorMessage>}
      {isLoading && <Spinner />}
      <StyledUsersList>
        {users?.map((user, index) => (
          <UserElement key={user.login.md5} user={user} {...addRefAttribute(index)} />
        ))}
      </StyledUsersList>
    </section>
  );
};
export default UsersPage;
