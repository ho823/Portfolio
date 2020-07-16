import React from 'react';
import styled from 'styled-components';

const ContainerFooter = styled.div`
  color: grey;
  height: 100%;
  padding: 1rem;
  text-align: center;
  margin-top: 4rem;
`;

export default function Footer() {
  return (
    <ContainerFooter>
      <p>©2020 -All right reserved</p>
    </ContainerFooter>
  );
}