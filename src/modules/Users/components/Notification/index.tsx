import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { StyledNote } from "./styles";

const Notification = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StyledNote>
      <p>Choose a user to see user info</p>
      <button type="button" onClick={() => navigate("/home/users")}>
        Choose a user
      </button>
    </StyledNote>
  );
};
export default Notification;
