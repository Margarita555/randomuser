import styled from "styled-components";

export const StyledUsersList = styled.ul`
  display: grid;
  grid-gap: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-left: 20px;
    margin-right: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
