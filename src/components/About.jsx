import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
font-family: 'Righteous'
`;

const Paragraph = styled.p`
font-family: 'Nunito', sans-serif;
`;

export default function About() {
  return(
    <div>
      <Title>About me</Title>
      <Paragraph>Quod cum ita sit, paucae domus studiorum seriis cultibus antea
        celebratae nunc ludibriis ignaviae torpentis exundant, vocali sonu,
        perflabili tinnitu fidium resultantes. denique pro philosopho cantor 
        et in locum oratoris doctor artium ludicrarum accitur et bybliothecis 
        sepulcrorum ritu in perpetuum clausis organa fabricantur hydraulica, 
        et lyrae ad speciem carpentorum ingentes tibiaeque et histrionici 
        gestus instrumenta non levia.</Paragraph>
    </div>

  );
}