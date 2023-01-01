import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton, StyledSection } from "../../shared/styles";

const LogoutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  return (
    <StyledSection>
      <StyledButton type="button" onClick={handleLogout}>
        {t("logout")}
      </StyledButton>
    </StyledSection>
  );
};
export default LogoutPage;
