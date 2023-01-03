import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Notification } from "../../modules/users";
import { convertDate } from "../../shared/helpers";
import { PhoneImage, LocationImage } from "../../assets";
import { IUser } from "../../modules/users/models";
import { StyledInfo, StyledName, StyledWrapper, StyledItem } from "./styles";

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
      {userId === "plug" && <Notification />}
      {userId !== "plug" && user && (
        <StyledInfo gender={user.gender}>
          <div>
            <img src={user.picture.large} alt="avatar" />
            <p>
              <StyledName gender={user.gender}>{user.name.first}</StyledName>
              <StyledName gender={user.gender}>{user.name.last}</StyledName>
            </p>
            <p>
              <StyledItem gender={user.gender}>{t("gender")}:</StyledItem>
              <span>{user.gender}</span>
            </p>
            <p>
              <StyledItem gender={user.gender}>{t("birthDate")}:</StyledItem>
              <span>{convertDate(user.dob.date)}</span>
            </p>
            <p>
              <StyledItem gender={user.gender}>{t("registrationDate")}:</StyledItem>
              <span>{convertDate(user.registered.date)}</span>
            </p>
            <StyledWrapper gender={user.gender}>
              <LocationImage />
              <span>
                {user.location.street.number + " " + user.location.street.name + " Street, " + user.location.city + ", " + user.location.country}
              </span>
            </StyledWrapper>
            <StyledWrapper gender={user.gender}>
              <PhoneImage />
              <span>{t(user.phone)}</span>
            </StyledWrapper>
          </div>
        </StyledInfo>
      )}
    </section>
  );
};
export default UserInfoPage;
