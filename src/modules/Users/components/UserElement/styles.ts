import styled from "styled-components";

interface IItem {
  gender: string;
  ref?: (node: HTMLLIElement) => void;
}

export const StyledUser = styled.li<IItem>`
  background-color: #ffffff;
  border: 2px solid ${({ gender }) => (gender === "male" ? "#afeeee" : "#fadadd")};
  padding: 30px 15px;
  border-radius: 3px;
  font-weight: 500;
  height: 332px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    border-radius: 3px;
  }

  p {
    margin-top: 13px;
    color: #0abab5;
    color: #de5d83;
    color: ${({ gender }) => (gender === "male" ? "#0abab5" : "#de5d83")};
    font-weight: 400;
  }

  span {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    font-weight: 500;
  }
`;

export const StyledName = styled.span`
  margin-right: 5px;
`;
