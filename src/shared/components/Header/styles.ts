import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLogoutLink = styled(Link)`
  color: #00ced1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    margin-right: 20px;
    font-size: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-right: 25px;
    font-size: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 30px;
    font-size: 20px;
  }
`;

export const StyledTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 15px 15px 15px 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    padding: 15px 30px 15px 25px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 15px 50px 15px 40px;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      width: 30px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
      width: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 40px;
    }
  }
  span {
    font-family: "Monoton";
    color: #008b8b;
    margin-left: 5px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      font-size: 28px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
      font-size: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 38px;
    }
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
