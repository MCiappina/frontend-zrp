import React, { InputHTMLAttributes } from 'react';
import StyledInput from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ onChange, ...props }) => {
  return <StyledInput type="text" onChange={onChange} {...props} />;
};

export default Input;