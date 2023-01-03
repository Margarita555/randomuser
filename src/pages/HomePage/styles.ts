import styled from "styled-components";

export const StyledImage = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 340px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    width: 700px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1150px;
  }
`;
