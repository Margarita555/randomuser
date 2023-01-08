import styled from "styled-components";


export const StyledInfoTop = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  div {
    position: relative;
    height: 230px;
    width: 230px;
  }
`;

export const StyledBackground = styled.img`
  height: 230px;
  width: 230px;
  border-radius: 50%;
`;

export const StyledWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  bottom: 5px;
  right: -60px;
  border-radius: 50%;
  border: 5px solid #fff;
`;

export const StyledName = styled.div`
  font-weight: 600;
  margin-top: 60px;
  text-align: center;
  color: #272e2e;
  span {
    margin-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

export const StyledInformation = styled.div`
  span {
    margin-left: 5px;
  }

  h2 {
    margin-bottom: 20px;
    color: #272e2e;
  }
  p {
    color: #2f4f4f;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    margin-top: 30px;
    h2 {
      text-align: center;
    }
    p {
      margin-bottom: 15px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    margin-top: 40px;
    h2 {
      text-align: center;
    }
    p {
      margin-left: 60px;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 50px;
    p {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }
`;

export const StyledTitle = styled.span`
  margin-right: 5px;
  font-weight: 500;
  color: #4f666a;
`;

export const StyledContacts = styled.div`
  font-weight: 500;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: #48d1cc;
  div {
    display: flex;
    align-items: center;
    // justify-content: center;
  }
  div:not(:last-child) {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid #eeeeee;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 320px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 15px;
    font-size: 16px;
    span {
      max-width: 265px;
    }
    svg {
      width: 18px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.maxTablet}) {
    width: 600px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 15px;
    font-size: 18px;
    svg {
      width: 20px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 40px;
    width: 600px;
    padding: 40px 15px 20px 20px;
    font-size: 20px;
    svg {
      width: 22px;
    }
  }

  svg {
    margin-right: 5px;
    fill: #48d1cc;
  }
`;
