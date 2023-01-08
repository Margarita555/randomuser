import { MouseEvent, useState } from "react";
import NavBar from "../NavBar";
import { StyledMenu, StyledWrapper, StyledBurger } from "./styles";

const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onLinkClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).nodeName === "A") {
      setMenuIsOpen(false);
    }
  };

  return (
    <StyledWrapper>

      <StyledBurger onClick={() => setMenuIsOpen(!menuIsOpen)} menuIsOpen={menuIsOpen}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </StyledBurger>
      {menuIsOpen && (
        <StyledMenu onClick={e => onLinkClick(e)}>
          <NavBar />
        </StyledMenu>
      )}
    </StyledWrapper>
  );
};
export default MobileMenu;
