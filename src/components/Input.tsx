import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ onChange, ...props }) => {
  return <input type="text" onChange={onChange} {...props} />;
};

export default Input;