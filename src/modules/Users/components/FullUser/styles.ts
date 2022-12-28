import styled from "styled-components";

interface IItem {
  gender: string;
}

export const StyledUser = styled.li<IItem>`
  background-color: #ace5ee;
  background-color: ${({ gender }) => (gender === "male" ? "#ace5ee" : "#fadadd")};
  padding: 30px 20px;
  border-radius: 3px;
  font-weight: 500;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  p {
    margin-top: 8px;
  }
`;

export const StyledName = styled.span`
  margin-right: 5px;
`;
