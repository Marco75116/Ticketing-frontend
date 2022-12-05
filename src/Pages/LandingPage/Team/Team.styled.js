import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContentContainer = styled.div`
  padding: 100px 0;
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
  text-align: center;
`;
export const Description = styled.div`
  font-size: 18px;
  text-align: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;
  margin-top: 5rem;
`;

export const Profil = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const Img = styled.img`
  width: 240px;
  border-radius: 50%;
`;
export const Name = styled.div`
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;
export const Position = styled.div``;
