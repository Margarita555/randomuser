import { Outlet } from "react-router-dom";
import Header from "../Header";
import {StyledContainer} from "./styles"

const Layout = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};
export default Layout;
