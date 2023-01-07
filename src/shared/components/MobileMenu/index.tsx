import { useRef, RefObject, MouseEvent, useState } from "react";
import useOnClickOutside from "../../hooks/useClickOutside";
import NavBar from "../NavBar";
import { BurgerImage } from "../../../assets";
import { StyledMenu, StyledWrapper, StyledBurger } from "./styles";

const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef: RefObject<HTMLDivElement> = useRef(null);
  useOnClickOutside(menuRef, () => setMenuIsOpen(false));

  const onLinkClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).nodeName === "A") {
      setMenuIsOpen(false);
    }
  };

  return (
    <StyledWrapper>
      {!menuIsOpen && <StyledBurger src={BurgerImage} alt="menu" onClick={() => setMenuIsOpen(true)} />}
      {menuIsOpen && (
        <StyledMenu ref={menuRef} onClick={e => onLinkClick(e)}>
          <NavBar />
        </StyledMenu>
      )}
    </StyledWrapper>
  );
};
export default MobileMenu;
