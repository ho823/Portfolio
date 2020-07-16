import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: grey;
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

export default function Project() {
  return(
    <Container>
      <Image src="https://via.placeholder.com/350x200" alt="placeholder" />
      <Text>
      <h2>Project 1</h2>
      <p>Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc
         ludibriis ignaviae torpentis exundant, vocali sonu, perflabili tinnitu fidium
          resultantes. denique pro philosopho cantor et in locum oratoris doctor artium
          ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum clausis organa
          fabricantur hydraulica, et lyrae ad speciem carpentorum ingentes tibiaeque et
          histrionici gestus instrumenta non levia.</p>
      </Text>
    </Container>

  );
}