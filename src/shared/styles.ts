import styled from "styled-components";

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(59, 56, 56, 0.929);
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.btnTextColor};
  font-weight: 600;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 200px;
    padding: 13px 30px;
    font-size: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    width: 200px;
    padding: 15px 30px;
    font-size: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 250px;
    padding: 18px 30px;
    font-size: 28px;
  }

  &:hover {
    color: #0abab5;
  }
`;

export const StyledSection = styled.section`
  background-color: #48d1cc;
  min-height: 100vh;
`;
