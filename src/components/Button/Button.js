import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  user-select: none;
  display: flex;
  justifyContent: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border: 0;
  outline: 0;
  &:hover {
    background-color: #f5f5f5;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default props => {
  const { label, onClick, disabled  } = props;
  return (
    <Button disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  )
};
