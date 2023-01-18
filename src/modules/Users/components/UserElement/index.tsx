import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { convertDate } from "../../../../shared/helpers";
import { StyledUser, StyledName } from "./styles";
import { IUser } from "../../models";

interface IUserElement {
  innerRef?: (node: HTMLLIElement) => void;
  user: IUser;
}

const UserElement = ({ innerRef, user }: IUserElement) => {
  const { t } = useTranslation();

  return (
    <StyledUser gender={user.gender} ref={innerRef}>
      <Link to={`/home/users/info`} state={{ user }}>
        <img src={user.picture.large} alt="avatar" width="160" />
        <p>
          {t("name")}:<StyledName>{user.name.first}</StyledName>
          <span>{t(user.name.last)}</span>
        </p>
        <p>
          {t("birthDate")}:<span>{convertDate(user.dob.date)}</span>
        </p>
        <p>
          {t("gender")}:<span>{user.gender}</span>
        </p>
      </Link>
    </StyledUser>
  );
};
export default UserElement;
