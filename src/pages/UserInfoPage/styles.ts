import styled from "styled-components";

interface IProp {
  gender: string;
}

export const StyledInfo = styled.div<IProp>`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    > div {
      padding: 40px 10px 60px 10px;
    }
    > div > img {
      width: 160px;
    }
    p {
      margin-top: 10px;
      font-size: 16px;
    }
    span {
      margin-left: 5px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-left: 10px;
    margin-right: 10px;
    > div {
      padding: 50px 30px;
    }
    > div > img {
      width: 200px;
    }
    p {
      margin-top: 16px;
      font-size: 18px;
    }
    span {
      margin-left: 8px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 30px;
    margin-right: 30px;
    > div {
      padding: 50px;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
    }
    span {
      margin-left: 10px;
    }
    > div > img {
      width: 220px;
    }
  }

  &:before,
  &:after,
  & > div:before,
  & > div:after {
    content: "";
    z-index: 1;
    display: block;
    position: absolute;
    border-color: ${({ gender }) => (gender === "male" ? "#48d1cc" : "#fadadd")};
    border-style: solid;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      width: 80px;
      height: 80px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
      width: 100px;
      height: 100px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 120px;
      height: 120px;
    }
  }

  &:before {
    top: 0;
    left: 0;
    border-width: 3px 0 0 3px;
  }
  &:after {
    right: 0px;
    top: 0px;
    border-width: 3px 3px 0 0;
  }

  > div:before {
    bottom: 0;
    right: 0;
    border-width: 0 3px 3px 0;
  }
  > div:after {
    left: 0px;
    bottom: 0px;
    border-width: 0 0 3px 3px;
  }

  > div > img {
    display: block;
    margin: 0 auto;
  }
`;

export const StyledName = styled.span<IProp>`
  font-weight: 600;
  color: ${({ gender }) => (gender === "male" ? "#48d1cc" : "#de5d83")};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    font-size: 22px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    font-size: 26px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

export const StyledTitle = styled.span<IProp>`
  color: ${({ gender }) => (gender === "male" ? "#48d1cc" : "#de5d83")};
`;

export const StyledWrapper = styled.div<IProp>`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    text-align: start;
    margin-top: 10px;
    font-size: 16px;
    span {
      max-width: 220px;
    }
    svg {
      width: 18px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-top: 16px;
    font-size: 18px;
    svg {
      width: 20px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 20px;
    font-size: 20px;
    svg {
      width: 22px;
    }
  }

  svg {
    fill: ${({ gender }) => (gender === "male" ? "#48d1cc" : "#de5d83")};
  }
`;
