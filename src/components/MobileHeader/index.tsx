import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://github.com/guilhermerodz.png" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default Header;
