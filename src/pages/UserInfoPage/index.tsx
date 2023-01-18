import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Notification } from "../../modules/users";
import { PhoneImage, LocationImage, BgImage } from "../../assets";
import { convertDate } from "../../shared/helpers";
import { IUser } from "../../modules/users/models";
import { StyledName, StyledWrapper, StyledTitle, StyledImage, StyledInformation, StyledContacts, StyledInfoTop, StyledBackground } from "./styles";

const UserInfoPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [user, setUser] = useState<IUser | null>(null);
  const [userMode, setUserMode] = useState(false);
  const userAddress = user?.location.street.number + " " + user?.location.street.name + ", " + user?.location.city + ", " + user?.location.country;

  useEffect(() => {
    if (location.state) {
      setUser(location.state.user);
      setUserMode(true);
    } else {
      setUserMode(false);
    }
  }, [user, location.state]);

  return (
    <section>
      {!userMode && <Notification />}
      {userMode && user && (
        <div>
          <StyledInfoTop>
            <div>
              <StyledBackground src={BgImage} alt="background" width={1200} height={200} />
              <StyledImage src={user.picture.large} alt="avatar" width={220} height={220} />
            </div>
          </StyledInfoTop>
          <StyledName>
            <span>{user.name.first}</span>
            <span>{user.name.last}</span>
          </StyledName>
          <StyledWrapper>
            <StyledContacts>
              <div>
                <LocationImage />
                <span>{userAddress}</span>
              </div>
              <div>
                <PhoneImage />
                <span>{t(user.phone)}</span>
              </div>
            </StyledContacts>
            <StyledInformation>
              <h2>{t("userInformation")}:</h2>
              <p>
                <StyledTitle>{t("gender")}:</StyledTitle>
                <span>{user.gender}</span>
              </p>
              <p>
                <StyledTitle>{t("birthDate")}:</StyledTitle>
                <span>{convertDate(user.dob.date)}</span>
              </p>
              <p>
                <StyledTitle>{t("registrationDate")}:</StyledTitle>
                <span>{convertDate(user.registered.date)}</span>
              </p>
            </StyledInformation>
          </StyledWrapper>
        </div>
      )}
    </section>
  );
};
export default UserInfoPage;
