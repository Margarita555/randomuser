import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton, StyledSection } from "../../shared/styles";

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("authenticated", "true");
    navigate("/home");
  };

  return (
    <StyledSection>
      <StyledButton onClick={handleLogin}>{t("login")}</StyledButton>
    </StyledSection>
  );
};
export default LoginPage;
