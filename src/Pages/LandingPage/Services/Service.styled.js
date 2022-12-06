import styled from "styled-components";
import { Create } from "styled-icons/ionicons-outline";
import { QrCodeScan } from "@styled-icons/bootstrap/QrCodeScan";
import { PresentationChartLine } from "@styled-icons/heroicons-solid/PresentationChartLine";

export const Wrapper = styled.div`
  padding: 100px 0;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerContent = styled.div``;
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
export const Description = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 4rem;
  margin-top: 4rem;
`;
export const Card = styled.div`
  width: 390px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  row-gap: 0.875rem;
`;
export const Logo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 10px rgb(0 0 0 / 5%);
`;

export const Icon1 = styled(Create)`
  color: white;
`;
export const Icon3 = styled(QrCodeScan)`
  color: white;
`;
export const Icon4 = styled(PresentationChartLine)`
  color: white;
`;
export const CardTitle = styled.div`
  font-weight: 500;
  padding: 5px 0;
  color: #fff;
  font-size: 20px;
`;
export const CardDescription = styled.div``;
