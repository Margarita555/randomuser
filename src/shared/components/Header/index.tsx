import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogoImage } from "../../../assets";
import { StyledHeader, StyledLogoutLink, StyledBar, StyledTop, StyledNavLink } from "./styles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <StyledTop>
        <img src={LogoImage} alt="logo" width={40} />
        <span>amg</span>
      </StyledTop>
      <StyledBar>
        <ul>
          <li>
            <StyledNavLink to="/home" end>
              {t("home")}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/home/users" end>
              {t("users")}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/home/users/plug">{t("userInfo")}</StyledNavLink>
          </li>
        </ul>
        <StyledLogoutLink>
          <Link to="/logout">{t("logout")}</Link>
        </StyledLogoutLink>
      </StyledBar>
    </StyledHeader>
  );
};
export default Header;
