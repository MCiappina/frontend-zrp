import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Pokemon', sans-serif;
  color: #ccc;
  transition: transform 0.3s ease;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
`;
