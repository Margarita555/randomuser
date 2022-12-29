import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    max-width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
  }
`;
