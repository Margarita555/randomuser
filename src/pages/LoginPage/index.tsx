import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { LOGIN_REQUESTED } from "../../modules/auth/actionTypes";
import { StyledButton, StyledSection } from "../../shared/styles";

const LoginPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: LOGIN_REQUESTED });
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
