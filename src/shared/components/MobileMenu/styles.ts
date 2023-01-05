import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 55px;
  right: 0;
  width: 190px;
  z-index: 998;
`;

export const StyledBurger = styled.img`
  position: fixed;
  width: 32px;
  top: 55px;
  right: 15px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  padding: 3px;
  border-radius: 2px;
  cursor: ponter;
`;

export const StyledMenu = styled.div`
  z-index: 100;
  position: absolute;
  width: 190px;
  top: 0;
  left: 0;
`;
