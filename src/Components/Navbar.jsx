import React from 'react';
import styled from 'styled-components';

const Constainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: red;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Constainer>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>search</SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Constainer>
  );
};

export default Navbar;
