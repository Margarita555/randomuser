import { useTranslation } from "react-i18next";
import { LogoImage } from "../../../assets";
import useWindowSize from "../../hooks/useWindowSize";
import NavBar from "../NavBar";
import LanguageSwitcher from "../LanguageSwitcher";
import MobileMenu from "../MobileMenu";
import { StyledLogoutLink, StyledTop, StyledWrapper, StyledLogo } from "./styles";

const Header = () => {
  const { t } = useTranslation();
  const size = useWindowSize();

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
      {size.width && size.width < 767.99 && <MobileMenu />}
      {size.width && size.width > 767.99 && <NavBar />}
    </header>
  );
};
export default Header;
