import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Righteous'
`;

const Paragraph = styled.p`
  font-family: 'Nunito', sans-serif;
`;

const SkillContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Skills() {
  return(
    <div>
      <Title>Skills</Title>
      <Paragraph>Quod cum ita sit, paucae domus studiorum seriis cultibus antea
        celebratae nunc ludibriis ignaviae torpentis exundant, vocali sonu,
        perflabili tinnitu fidium resultantes. denique pro philosopho cantor 
        et in locum oratoris doctor artium ludicrarum accitur et bybliothecis 
        sepulcrorum ritu in perpetuum clausis organa fabricantur hydraulica, 
        et lyrae ad speciem carpentorum ingentes tibiaeque et histrionici 
        gestus instrumenta non levia.</Paragraph>
        <SkillContent>
          <div>
            <Title>Design/Ux</Title>
            <Paragraph>dkjjddnndjnjndj</Paragraph>
          </div>
          <div>
            <Title>Infographie</Title>
            <Paragraph>dkjjddnndjnjndj</Paragraph>
          </div>
          <div>
            <Title>Dev web</Title>
            <Paragraph>dkjjddnndjnjndj</Paragraph>
          </div>
        </SkillContent>
    </div>

  );
}