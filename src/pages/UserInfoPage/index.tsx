import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { errorSelector, loadingSelector, userSelector } from "../../modules/users/selectors";
import * as types from "../../modules/users/actionTypes";
import { Notification } from "../../modules/users";
import { Spinner } from "../../shared/components";
import { ErrorMessage } from "../../shared/styles";
// import { S } from "./styles";

const UserInfoPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const { userId } = useParams();
  const user = useSelector(userSelector);

  console.log(userId);
  // useEffect(() => {
  //   const results = axios.get(`https://randomuser.me/api/?results=20`).then(results => console.log(results.data));
  // }, []);

  useEffect(() => {
    dispatch({ type: types.FETCH_USER_BY_ID_REQUESTED, payload: userId });
  }, [dispatch, userId]);

  return (
    <section>
      {error && <ErrorMessage>{t("somethingWentWrong")}</ErrorMessage>}
      {isLoading && <Spinner />}
      {userId === "plug" && <Notification/>}
      {!isLoading && user && (
        <>
          <img src={user.picture.large} alt="avatar" width="180" />
          <p>
            {t("name")}:<span>{t(user.name.first)}</span>
            <span>{user.name.last}</span>
          </p>
          <p>
            {t("birthDate")}:<span>{t(user.dob.date)}</span>
          </p>
          <p>
            {t("Gender")}:<span>{t(user.gender)}</span>
          </p>
          <p>
            {t("address")}:<span>{t(user.location.country)}</span>
          </p>
          <p>
            {t("pnone")}:<span>{t(user.phone)}</span>
          </p>
          <p>
            {t("registrationDate")}:<span>{t(user.registered.date)}</span>
          </p>
        </>
      )}
    </section>
  );
};
export default UserInfoPage;
