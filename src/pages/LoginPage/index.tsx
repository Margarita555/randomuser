import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import {  } from "./styles";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Link to="/home">Log in</Link>
    </section>
  );
};
export default LoginPage;
