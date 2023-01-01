import styled from "styled-components";

interface IItem {
  gender: string;
  ref?: (node: HTMLLIElement) => void;
}

export const StyledUser = styled.li<IItem>`
  background-color: ${({ gender }) => (gender === "male" ? "#afeeee" : "#fadadd")};
  background-color: #ffffff;
  border: 2px solid ${({ gender }) => (gender === "male" ? "#afeeee" : "#fadadd")};
  padding: 30px 10px;
  border-radius: 3px;
  font-weight: 500;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 3px;
  }

  p {
    margin-top: 8px;
  }
`;

export const StyledName = styled.span`
  margin-right: 5px;
`;
