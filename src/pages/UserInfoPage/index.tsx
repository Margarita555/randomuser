import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usersSelector } from "../../modules/users/selectors";
import { IUser } from "../../modules/users/models";
// import { S } from "./styles";

const UserInfoPage = () => {
  const { t } = useTranslation();
  const { userId } = useParams();
  const users = useSelector(usersSelector);
  const [user, setUser] = useState<IUser | null | undefined>(null);

  useEffect(() => {
    const requiredUser = users?.find(user => user.login.md5 === userId);
    // console.log(user);
    setUser(requiredUser);
  }, [userId, users, user]);
  //
  // useEffect(() => {
  //   dispatch({ type: types.FETCH_USER_BY_ID_REQUESTED, payload: userId })}
  console.log(user);
  // address phoneNumber registrationDate
  return (
    <section>
      {user && (
        <>
          <img src={user.picture.large} alt="avatar" width="180" />
          <p>
            Name:<span>{user.name.first}</span>
            <span>{user.name.last}</span>
          </p>
          <p>
            Birth Date:<span>{user.dob.date}</span>
          </p>
          <p>
            Gender:<span>{user.gender}</span>
          </p>
          <p>
            Address:<span>{user.location.country}</span>
          </p>
          <p>
            Pnone:<span>{user.phone}</span>
          </p>
          <p>
            Registration Date:<span>{user.registered.date}</span>
          </p>
        </>
      )}
    </section>
  );
};
export default UserInfoPage;
