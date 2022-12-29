import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { errorSelector, loadingSelector, usersSelector } from "../../modules/users/selectors";
import * as types from "../../modules/users/actionTypes";
import { FullUser } from "../../modules/users";
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

  return (
    <section>
      {error && <ErrorMessage>{t("somethingWentWrong")}</ErrorMessage>}
      {isLoading && <Spinner />}
      <StyledUsersList>
        {users?.map(user => (
          <FullUser
            key={user.login.md5}
            id={user.login.md5}
            avatar={`${user.picture.large}`}
            firstName={user.name.first}
            lastName={user.name.last}
            birthDate={user.dob.date}
            gender={user.gender}
          />
        ))}
      </StyledUsersList>
    </section>
  );
};
export default UsersPage;
