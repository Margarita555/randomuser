import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { StyledNote } from "./styles";

const Notification = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StyledNote>
      <p>{t("chooseUserToSeeUserInfo")}</p>
      <button type="button" onClick={() => navigate("/home/users")}>
        {t("chooseUser")}
      </button>
    </StyledNote>
  );
};
export default Notification;
