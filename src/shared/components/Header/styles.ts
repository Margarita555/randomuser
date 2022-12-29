import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header``;

export const StyledBar = styled.div`
  height: 70px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  display: flex;
  align-items: center;

  ul {
    display: flex;
    // align-items: center;
    height: 100%;
  }

  li {
    font-size: 30px;
    font-weight: 600;
  }

  li:not(:last-child) {
    margin-right: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    color: #009698;
    background-color: #afeeee;
  }
`;

export const StyledLogoutLink = styled.div`
  margin-right: 0;
  margin-left: auto;
  font-size: 24px;
  color: #ffffff;
`;

export const StyledTop = styled.div`
  padding: 15px 40px;
  display: flex;
  align-items: center;

  span {
    font-family: "Monoton";
    font-size: 38px;
    color: #008b8b;
    margin-left: 5px;
  }
`;
