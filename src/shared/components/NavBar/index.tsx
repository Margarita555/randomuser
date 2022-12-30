import { useTranslation } from "react-i18next";
import { StyledNavList, StyledBar, StyledNavLink } from "./styles";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <StyledBar>
      <StyledNavList>
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
      </StyledNavList>
    </StyledBar>
  );
};
export default NavBar;
