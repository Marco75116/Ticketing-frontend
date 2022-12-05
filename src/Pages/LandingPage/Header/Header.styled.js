import styled from "styled-components";
import imgSrc from "../../../assets/stadium.jpg";

export const HeaderContainer = styled.div`
  display: table;
  width: 100%;
  height: 100vh;
  padding: 0;
  background: url(${imgSrc}) center center no-repeat;
  opacity: 0.7;
  background-color: #e5e5e5;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
`;
export const Title = styled.div`
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-size: 52px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
  margin: 0 auto;
  transition: 0.2s;
  :hover {
    color: #5ca9fb;
    color: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  }
`;

export const Description = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Button = styled.a`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  color: #fff;
  background-color: #5ca9fb;
  background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.3333333;
  width: 10%;
  margin: 0 auto;
  cursor: pointer;
`;
