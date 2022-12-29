import styled from "styled-components";
import { Matic } from "styled-icons/crypto";

export const Wrapper = styled.div`
  position: relative;
  height: 400px;
`;
export const ContainerContent = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: radial-gradient(
      66.32% 66.32% at 54.13% 113.95%,
      rgba(108, 38, 255, 0.2) 0,
      rgba(242, 89, 255, 0) 100%
    ),
    linear-gradient(
      211.99deg,
      rgba(65, 157, 241, 0.2) -4.17%,
      rgba(45, 143, 234, 0) 68.7%
    ),
    radial-gradient(
      100% 100% at 28.65% 0,
      rgba(109, 0, 255, 0.25) 0,
      rgba(250, 247, 254, 0) 100%
    );
  opacity: 0.8;
`;
export const Title = styled.div`
  color: #fff;
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  margin: 0 0 20px;
  font-weight: 800;
  font-size: 36px;
`;

export const ContainerIcon = styled.div`
  padding: 0.25rem;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: 1s;
  left: ${(props) => (props.clicked ? "100%" : "0%")};
  transform: ${(props) => (props.clicked ? "translate(-100%, 0)" : "")};
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;
export const IconMatic = styled(Matic)`
  color: rgba(123, 63, 228);
`;

export const AboutContent = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255);
  filter: drop-shadow(0 8px 24px #d3d3d3);
  transition: 1.5s;
  transition-delay: 0.5s;
  transition-property: border-radius;
  border-radius: ${(props) =>
    props.clicked
      ? " 1.25rem 11.25rem 11.25rem 1.25rem"
      : "11.25rem 1.25rem 1.25rem 11.25rem"};

  gap: 0.75rem;
  width: 70%;
  height: 215px;
  display: flex;
  margin: 0 auto;
`;
export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) =>
    props.clicked ? " 3rem 195px 3rem 3rem" : "3rem  3rem 3rem 240px"};
  transition: 1.5s;
  animation-duration: 2.25s;
  animation-name: ${(props) => (props.clicked ? "slidein" : "slidein")};
  display: ${(props) => props.clicked && "none"};
  @keyframes slidein {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Img = styled.img``;

export const Stats = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props) =>
    props.clicked ? " 3rem 195px 3rem 3rem" : "3rem  3rem 3rem 200px"};
  transition: 1.5s;
`;

export const StatsText = styled.div`
  padding-left: 1rem;
  border-color: rgba(170, 132, 237);
  border-left-width: 2px;
  border-left: 2px solid transparent;
  border-image: linear-gradient(to right, #aa84ed 0%, #aa84ed 100%);
  border-image-slice: 1;
  color: #aa84ed;
  animation-duration: 2.25s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      opacity: 0;
    }
    33% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const TextBellow = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;
