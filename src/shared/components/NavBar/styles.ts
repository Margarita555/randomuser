import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.accentColor};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    padding: 0 30px;
    height: 55px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 40px;
    height: 70px;
  }
`;

export const StyledNavList = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    height: 100%;
  }

  li {
    font-weight: 600;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      width: 100%;
      font-size: 16px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
      font-size: 22px;
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
  color: #ffffff;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: block;
    width: 100%;
    padding: 12px 24px;
    border-bottom: 1px solid #fff;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &.active {
    position: relative;
    color: #009698;
  }

  &.active:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      top: 5px;
      left: -17px;
      border-width: 15px 18px 15px 0;
      border-color: transparent #48d1cc transparent transparent;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      bottom: -17px;
      left: 45%;
      border-width: 18px 20px 0 20px;
      border-color: #48d1cc transparent transparent transparent;
    }
  }
`;
