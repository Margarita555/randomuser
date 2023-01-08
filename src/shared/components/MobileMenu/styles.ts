import styled from "styled-components";

interface IBurger {
  menuIsOpen: boolean;
}

export const StyledWrapper = styled.div`
  position: fixed;
  top: 55px;
  right: 0;
  width: 190px;
  z-index: 998;
`;

export const StyledBurger = styled.div<IBurger>`
  position: fixed;
  width: ${({ menuIsOpen }) => (menuIsOpen ? "190px" : "32px")};
  display: block;
  height: ${({ menuIsOpen }) => (menuIsOpen ? "44px" : "29px")};
  right: ${({ menuIsOpen }) => (menuIsOpen ? "0" : "15px")};
  background-color: ${({ theme }) => theme.colors.accentColor};
  padding: 6px;
  border-radius: 2px;
  border-top-right-radius: ${({ menuIsOpen }) => (menuIsOpen ? "0" : "2px")};
  cursor: ponter;
  div {
    margin-right: 0;
    margin-left: ${({ menuIsOpen }) => (menuIsOpen ? "auto" : "0")};
    width: 21px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div > span {
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    transform-origin: left;
    transition: all 2s ease;
  }

  div > span:first-child {
    transform: ${({ menuIsOpen }) => (menuIsOpen ? "rotate(45deg)" : "rotate(0deg)")};
  }
  div > span:nth-child(2) {
    opacity: ${({ menuIsOpen }) => (menuIsOpen ? "0" : "1")};
  }
  div > span:last-child {
    transform: ${({ menuIsOpen }) => (menuIsOpen ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;

export const StyledMenu = styled.div`
  z-index: 100;
  position: absolute;
  top: 32px;
  left: 0;
  width: 190px;
  height: 200px;
  background-color: #48d1cc;
  border-bottom-left-radius: 3px;
`;
