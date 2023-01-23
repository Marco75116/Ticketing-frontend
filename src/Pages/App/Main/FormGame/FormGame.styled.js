import styled from "styled-components";

export const Card = styled.div`
  border-radius: 20px;
  background-color: rgba(252, 252, 252, 1);
  margin: 0;
  width: 100%;
  height: auto;
  border: 3px solid transparent;
  margin: 0 22rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 1rem;
`;
export const Input = styled.input`
  width: 50%;
  height: 2rem;
  outline: none;
  border-radius: 0.25rem;
  border-width: 1.5px;
  padding-left: 0.5rem;
  font-family: inherit;
  font-size: 14px;
  margin: 1rem;
`;
