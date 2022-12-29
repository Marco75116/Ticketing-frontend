import styled from "styled-components";

export const NavigationContainer = styled.div`
  background-color: #fff;
  border-color: rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
export const Brand = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  margin: 9px 20px 0;
  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Item = styled.div`
  font-size: 15px;
  margin: 9px 20px 0;
  cursor: pointer;
  color: #555;
  padding: 8px 2px;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  transition: 0.2s;

  border-bottom: ${(props) =>
    props.selectedPart ? "3px solid transparent" : ""};
  border-image: ${(props) =>
    props.about === 2
      ? "linear-gradient(to right, rgba(109,0,255,0.25) 0%, rgba(123,63,228,0.55) 100%)"
      : "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)"};
  border-image-slice: 1;
`;
export const Button = styled.a`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  color: #fff;
  background-color: #5ca9fb;
  background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  padding: 14px 0px;
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
  width: 10rem;
  cursor: pointer;
`;
