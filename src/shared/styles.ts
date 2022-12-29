import styled from "styled-components";

export const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(59, 56, 56, 0.929);
`;

export const StyledButton = styled.button`
  // margin-left: auto;
  // margin-right: auto;
  width: 250px;
  padding: 20px 30px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.btnTextColor};
  font-size: 28px;
  font-weight: 600;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // $:hover {
  //   background-color: #e1e3f8;
  // }
`;

export const StyledSection = styled.section`
  background-color: #48d1cc;
  min-height: 100vh;
  // text-align: center;
`;
