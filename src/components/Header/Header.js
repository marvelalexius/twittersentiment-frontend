import React from "react";
import styled from "styled-components";

import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: calc(100% - 60px);
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(181, 219, 217, 1) 44%,
    rgba(148, 187, 233, 1) 100%
  );
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding-left: 30px;
  padding-right: 30px;
`;

const Spacer = styled.div`
  width: 20px;
`;

export default props => {
  const { onChange, startStream, stopStream, startDisabled } = props;
  return (
    <Header>
      <SearchInput onChange={onChange} />
      <Spacer />
      <Button disabled={startDisabled} onClick={startStream} label="Start" />
      <Spacer />
      <Button onClick={stopStream} label="Stop" />
    </Header>
  );
};
