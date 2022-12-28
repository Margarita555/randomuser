import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { usersSelector } from "../../modules/users/selectors";
import * as types from "../../modules/users/actionTypes";
import { FullUser } from "../../modules/users";
import { StyledUsersList } from "./styles";

const UsersPage = () => {
  const users = useSelector(usersSelector);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.USERS_FETCH_REQUESTED });
  }, [dispatch]);
  console.log(users);
  return (
    <section>
      <StyledUsersList>
        {users?.map(
          user => (
            <FullUser
              key={user.login.md5}
              id={user.login.md5}
              avatar={`${user.picture.large}`}
              firstName={user.name.first}
              lastName={user.name.last}
              birthDate={user.dob.date}
              gender={user.gender}
            />
          ),
          // <li key={user.login.uuid}>
          //   <Link to={`/home/users/${user.login.uuid}`}>
          //     <img src={`${user.picture.medium}`} alt="avatar" />
          //     <p>{user.name.first}</p>
          //     <p>{user.name.last}</p>
          //   </Link>
          // </li>
        )}
      </StyledUsersList>
    </section>
  );
};
export default UsersPage;
