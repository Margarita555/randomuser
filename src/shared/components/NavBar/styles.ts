import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.accentColor};
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 0 15px;
    height: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    padding: 0 30px;
    height: 65px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 40px;
    height: 70px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  height: 100%;

  li {
    font-weight: 600;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      font-size: 16px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
      font-size: 24px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 28px;
    }
  }

  li:not(:last-child) {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      margin-right: 5px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
      margin-right: 30px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-right: 35px;
    }
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
