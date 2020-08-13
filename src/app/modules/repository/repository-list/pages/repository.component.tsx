import React from 'react';

// component
import Card from '../components/card-repository/card.component';

// shared
import Menu from '../../../../../shared/menu/menu.component';

// styles
import { Container, MenuContainer, ListContainer } from './repository.styles';

export default function RepositoryList() {
  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <ListContainer>
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
        <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
      </ListContainer>
    </Container>
  );
}
