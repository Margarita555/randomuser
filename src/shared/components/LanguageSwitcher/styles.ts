import styled from "styled-components";

interface IButton {
  type: "button";
  onClick: () => void;
  active: string;
}

export const StyledSwitcher = styled.div`
  position: relative;

  ul {
    position: absolute;
    left: -7px;
    top: 28px;
    width: 38px;
    box-shadow: 0px 0px 4px rgba(136, 136, 136, 0.24);
    border-radius: 8px;
    z-index: 999;
  }

  li {
    cursor: pointer;
    border-bottom: 1px solid #eee;
    color: #292d45;
  }

  div {
    cursor: pointer;
  }

  img {
    border-radius: 50px;
    height: 22px;
    width: 22px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      height: 20px;
      width: 20px;
    }
  }
`;

export const StyledButton = styled.button<IButton>`
width: 100%;
    border: none;
    padding-top: 5px;
    padding-bottom: 4px;
    background-color: ${({ active }) => (active ? "#e0ffff" : "#fff")};
    font-size: 12px;
    cursor: pointer;
  }
`;
