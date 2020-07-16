import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  margin-left: 6rem;
  margin-top: 2rem;
`;

const Image = styled.img`

`;

const Text = styled.div`
  height: 30%;
  width: 40%;
  margin-left: 2rem;
`;

const Title = styled.h2`
font-family: 'Righteous'
`;

const Paragraph = styled.p`
font-family: 'Nunito', sans-serif;
`;

export default function Project() {
  return(
    <Container>
      <Image src="https://via.placeholder.com/350x200" alt="placeholder" />
      <Text>
      <Title>Project 1</Title>
      <Paragraph>Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc
         ludibriis ignaviae torpentis exundant, vocali sonu, perflabili tinnitu fidium
          resultantes. denique pro philosopho cantor et in locum oratoris doctor artium
          ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum clausis organa
          fabricantur hydraulica, et lyrae ad speciem carpentorum ingentes tibiaeque et
          histrionici gestus instrumenta non levia.</Paragraph>
      </Text>
    </Container>

  );
}