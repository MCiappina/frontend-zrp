import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: #F37055;
  color: #fff;
  transition: background-color 0.3s;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff7f69;
  }
`;

export default StyledButton;