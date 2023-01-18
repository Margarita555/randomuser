import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { StyledNote } from "./styles";

const Notification = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onChooseUserClick = () => {
    navigate("/home/users");
  };

  return (
    <StyledNote>
      <p>{t("chooseUserToSeeInfo")}</p>
      <button type="button" onClick={onChooseUserClick}>
        {t("chooseUser")}
      </button>
    </StyledNote>
  );
};
export default Notification;
