import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { CheckShield } from "@styled-icons/boxicons-regular/CheckShield";
import { ArrowClockwise } from "styled-icons/bootstrap";
import { Users } from "@styled-icons/fa-solid/Users";

export const Wrapper = styled.div`
  background: #f6f6f6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
`;

export const Title = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  margin: 0 0 20px;
  font-weight: 800;
  font-size: 36px;
  color: #333;
  font-family: "Raleway", sans-serif;
  line-height: 1.1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  column-gap: 3rem;
  margin-top: 4rem;
`;
export const Card = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  row-gap: 0.875rem;
`;
export const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 5%);
`;
export const FontIcon = styled(Icon)`
  color: ${(props) => props.color};
  font-size: 38px;
  transition: all 0.5s;
  color: #fff;
`;

export const Icon1 = styled(CheckShield)`
  color: #fff;
`;
export const Icon2 = styled(ArrowClockwise)`
  color: #fff;
`;
export const Icon3 = styled(Users)`
  color: #fff;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  font-family: "Raleway", sans-serif;
  line-height: 1.1;
`;
export const CardDescription = styled.div`
  font-size: 15px;
`;
