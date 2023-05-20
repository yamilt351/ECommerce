import React from "react";
import styled from "styled-components";

const Constainer = styled.div`
  height: 4rem;
  width: 100%;
  background-color: red;
`;
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;

`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Logo= styled.h1`
  font-size: 2rem;
  font-weight: bold;

`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;
const Input = styled.input`
  border: none;
`;

const Language = styled.span`
  font-size: 1.2rem;
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
          <SearchContainer>
            <Input></Input>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Yamil</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Constainer>
  );
};

export default Navbar;
