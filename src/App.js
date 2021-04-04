import React from 'react';
import styled from 'styled-components';
import ConfigQRGenerator from './pages/ConfigQRGenerator';
import EntryQRGenerator from './pages/EntryQRGenerator';

const AppDiv = styled.div``;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Header = styled.div`
  background-color: #2176FF;
  color: #FFFFFF;
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: 600px;
`;

function App () {
  return (
    <AppDiv>
      <Header>ADD Video Control Center</Header>
      <Content>
        <ConfigQRGenerator />
        <EntryQRGenerator />
      </Content>
    </AppDiv>
  );
}

export default App;
