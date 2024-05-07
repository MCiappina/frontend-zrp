import React from 'react';

interface Props {
  error: Error | null;
}

const ErrorComponent: React.FC<Props> = ({ error }) => {
  return error ? <div>Error: {error.message}</div> : null;
};

export default ErrorComponent;