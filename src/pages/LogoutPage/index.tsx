import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { LOGOUT_REQUESTED } from "../../modules/auth/actionTypes";
import { StyledButton, StyledSection } from "../../shared/styles";

const LogoutPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: LOGOUT_REQUESTED });
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
