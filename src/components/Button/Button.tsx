import React, { ButtonHTMLAttributes } from 'react';
import StyledButton from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick, children, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;