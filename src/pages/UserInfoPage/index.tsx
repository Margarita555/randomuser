import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Notification } from "../../modules/users";
import { IUser } from "../../modules/users/models";
// import { S } from "./styles";

const UserInfoPage = () => {
  const { t } = useTranslation();
  const { userId } = useParams();
  const location = useLocation();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
    }
  }, [user, location.state]);

  return (
    <section>
      {/* {error && <ErrorMessage>{t("somethingWentWrong")}</ErrorMessage>}
      {isLoading && <Spinner />} */}
      {userId === "plug" && <Notification />}
      {user && (
        <>
          <img src={user.picture.large} alt="avatar" width="180" />
          <p>
            {t("name")}:<span>{user.name.first}</span>
            <span>{user.name.last}</span>
          </p>
          <p>
            {t("birthDate")}:<span>{user.dob.date}</span>
          </p>
          <p>
            {t("Gender")}:<span>{user.gender}</span>
          </p>
          <p>
            {t("address")}:
            <span>
              {user.location.street.number + " " + user.location.street.name + " Street, " + user.location.city + ", " + user.location.country}
            </span>
          </p>
          <p>
            {t("pnone")}:<span>{t(user.phone)}</span>
          </p>
          <p>
            {t("registrationDate")}:<span>{user.registered.date}</span>
          </p>
        </>
      )}
    </section>
  );
};
export default UserInfoPage;
