import styled from "styled-components";

export const StyledUsersList = styled.ul`
  display: grid;
  //   max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-left: auto;
  margin-right: auto;
  justify-items: center;
`;
