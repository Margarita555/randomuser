import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import {  } from "./styles";

const Header = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Link to="/home/users">Users</Link>
      <Link to="/home/users/5">User Info</Link>
      <Link to="/logout">Log out</Link>
    </section>
  );
};
export default Header;
