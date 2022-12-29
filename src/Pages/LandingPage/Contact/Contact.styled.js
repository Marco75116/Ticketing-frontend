import styled from "styled-components";
import { Address } from "styled-icons/entypo";
import { Telephone } from "styled-icons/bootstrap";
import { Email } from "styled-icons/entypo";
export const Wrapper = styled.div`
  padding: 100px 0 60px;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: rgba(255, 255, 255, 0.75);
`;
export const ContainerContent = styled.div`
  width: 1170px;
  margin: 0px auto;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const Item1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  /* background-color: red; */
`;
export const Item2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
export const Title = styled.div`
  font-family: "Raleway", sans-serif;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 36px;
  ::after {
    position: absolute;
    content: "";
    background: rgba(255, 255, 255, 0.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 30px;
    box-sizing: border-box;
    margin-left: -30px;
  }
`;
export const Description = styled.div`
  font-size: 16px;
  margin-bottom: 4rem;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 60px;
`;
export const ContainerInputInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 2rem;
`;
export const TextInput = styled.textarea`
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.containerColor};
  box-shadow: ${(props) => props.theme.shadow};
  padding: 0.6rem 0.75rem;
  outline: none;
  border: 1px solid #ddd;
  height: ${(props) => props.height || "2.3rem"};
  resize: none;
  font-family: "Rubik", sans-serif;
`;
export const ButtonSend = styled.button`
  margin: 30px 0;
  background: transparent;
  touch-action: manipulation;
  cursor: pointer;
  padding: 14px 34px;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 25px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.5s linear;
  line-height: 1.3333333;
  border: 2px solid #fff;
  width: 27%;
`;

export const TitleInfo = styled.div`
  color: #fff;
  margin-top: 80px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  font-weight: 400;

  font-size: 20px;
`;
export const SectionInfo = styled.div``;
export const Span = styled.span`
  margin-bottom: 10px;
  color: #fff;
`;
export const Icon1 = styled(Address)``;
export const Icon2 = styled(Telephone)``;
export const Icon3 = styled(Email)``;
