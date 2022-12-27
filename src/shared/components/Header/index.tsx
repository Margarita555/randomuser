import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import {  } from "./styles";

const Header = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Link to="/home/user">Users</Link>
      <Link to="/home/user/5">User Info</Link>
      <Link to="/logout">Logout</Link>
    </section>
  );
};
export default Header;
