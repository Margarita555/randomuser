import styled from "styled-components";

export const StyledNote = styled.div`
  margin-top: 30px;
  text-align: center;

  p {
    font-size: 18px;
  }

  button {
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.accentColor};
    font-size: 18px;
    font-weight: 500;
    padding: 8px 20px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
    cursor: pointer;
  }
`;
// export const StyledButton = styled.button`

// `;
