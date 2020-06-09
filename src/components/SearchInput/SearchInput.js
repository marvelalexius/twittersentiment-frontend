import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 400px;
  height: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const SearchInput = styled.input`
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: 0;
`;

export default props => {
  const { value, onChange } = props; 
  return (
    <Background>
      <SearchInput placeholder="Enter a search term..." value={value} onChange={onChange} />
    </Background>
  )
};
