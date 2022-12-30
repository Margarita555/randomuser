import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledUser, StyledName } from "./styles";

interface IFullUser {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
}

const UserItem = ({ id, avatar, firstName, lastName, birthDate, gender }: IFullUser) => {
  const { t } = useTranslation();

  return (
    <StyledUser gender={gender}>
      <Link to={`/home/users/${id}`}>
        <img src={avatar} alt="avatar" width="160" />
        <p>
          {t("name")}:<StyledName>{firstName}</StyledName>
          <span>{t(lastName)}</span>
        </p>
        <p>
          {t("birthDate")}:<span>{birthDate}</span>
        </p>
        <p>
          {t("gender")}:<span>{gender}</span>
        </p>
      </Link>
    </StyledUser>
  );
};
export default UserItem;
