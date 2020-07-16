import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  height: 100%;
  box-shadow: 0px 4px 6px -3px rgba(69,69,69,0.64);
  color: black;
  padding: 1rem;
`;

const ContainerList = styled.ul`
  list-style-type: none;
  display: flex;

`;

const List = styled.li`
  flex-direction: row;
  flex-grow: 1;

`;

const ListHome = styled.li`
  flex-direction: row;
  flex-grow: 6;
  position: relative;
  font-size: 1.4rem;

`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 20px;
  position: absolute;
  bottom: 0rem;
  z-index: -1;
  background-color: orangered;
`;

export default function Navigation() {
  return(
    <Nav>
      <ContainerList>
        <ListHome><Circle />A.</ListHome>
        <List>Projets</List>
        <List>Projets</List>
        <List>skills</List>
        <List>About me</List>
      </ContainerList>
    </Nav>
  );
}