import styled from "styled-components";

export const Card = styled.div`
  border-radius: 20px;
  background-color: rgba(252, 252, 252, 1);
  margin: 0;
  width: 100%;
  height: auto;
  border: 3px solid transparent;
  border-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  border-image-slice: 1;
  margin: 0 22rem;
  padding: 1.5rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ConnectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConnectWalletLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 1rem 0;
`;

export const Title = styled.div``;
export const Button = styled.button`
  background-color: #6372ff;
  color: #fff;
  border-radius: 6px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  padding: 0.75rem;
  cursor: pointer;
`;
