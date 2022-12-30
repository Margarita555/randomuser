import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { errorSelector, loadingSelector, usersSelector } from "../../modules/users/selectors";
import * as types from "../../modules/users/actionTypes";
import { UserItem } from "../../modules/users";
import { StyledUsersList } from "./styles";
import { Spinner } from "../../shared/components";
import { ErrorMessage } from "../../shared/styles";

const UsersPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch({ type: types.USERS_FETCH_REQUESTED });
  }, [dispatch]);

  function convertDate(timestamp: string) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}.${month}.${year}`;
  }

  return (
    <section>
      {error && <ErrorMessage>{t("somethingWentWrong")}</ErrorMessage>}
      {isLoading && <Spinner />}
      <StyledUsersList>
        {users?.map(user => (
          <UserItem
            key={user.login.md5}
            id={user.login.md5}
            avatar={`${user.picture.large}`}
            firstName={user.name.first}
            lastName={user.name.last}
            birthDate={convertDate(user.dob.date)}
            gender={user.gender}
          />
        ))}
      </StyledUsersList>
    </section>
  );
};
export default UsersPage;
