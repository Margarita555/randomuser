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

// import { useRouteError } from "react-router-dom";
// export default function NotFoundPage() {
//   const error: any = useRouteError();
//   const { t } = useTranslation();

//   return (
//     <div>
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }
