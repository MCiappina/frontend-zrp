import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div<{ loaded: any }>`
  max-width: 300px;
  width: 100%;
  background-color: #444;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  text-align: center;
  opacity: ${({ loaded }) => (loaded ? '1' : '0')};
  transform: ${({ loaded }) => (loaded ? 'scale(1)' : 'scale(0.8)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: ${({ loaded }) => (loaded ? fadeIn : 'none')} 0.5s forwards;
`;

export const Name = styled.h2`
  color: #fff;
  margin-bottom: 10px;
  transition: color 0.3s ease;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
`;

export const Abilities = styled.h3`
  color: #fff;
  transition: color 0.3s ease;
`;

export const AbilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;
`;

export const AbilityItem = styled.li`
  color: #fff;
  margin-bottom: 5px;
  transition: color 0.3s ease;
`;

export const Types = styled.h3`
  color: #fff;
  transition: color 0.3s ease;
`;

export const TypesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.3s ease;
`;

export const TypeItem = styled.li`
  color: #fff;
  margin-bottom: 5px;
  transition: color 0.3s ease;
`;

