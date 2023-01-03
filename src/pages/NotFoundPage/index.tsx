import { useTranslation } from "react-i18next";
import { StyledMessage } from "./styles";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledMessage>{t("notFound")}</StyledMessage>
    </section>
  );
};
export default NotFoundPage;
