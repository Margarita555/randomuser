import { useTranslation } from "react-i18next";
import { LogoImage } from "../../../assets";
import LanguageSwitcher from "../LanguageSwitcher";
import NavBar from "../NavBar";
import { StyledLogoutLink, StyledTop, StyledWrapper, StyledLogo } from "./styles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <StyledTop>
        <StyledLogo>
          <img src={LogoImage} alt="logo" width={40} />
          <span>amg</span>
        </StyledLogo>
        <StyledWrapper>
          <StyledLogoutLink to="/logout">{t("logout")}</StyledLogoutLink>
          <LanguageSwitcher />
        </StyledWrapper>
      </StyledTop>
      <NavBar />
    </header>
  );
};
export default Header;
