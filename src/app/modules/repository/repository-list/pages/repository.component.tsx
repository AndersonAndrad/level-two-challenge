import React, { useEffect, useState } from 'react';

// api
import api from '../../../../../service/api/level-one-api';

// component
import Card from '../components/card-repository/card.component';

// shared
import Menu from '../../../../../shared/menu/menu.component';

// styles
import { Container, MenuContainer, ListContainer } from './repository.styles';

export default function RepositoryList() {
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    api.get('/repositories').then((response: any) => {
      setRepository(response.data);
    });
  }, [repository]);

  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <ListContainer>
        <ul>
          {repository.map((repo: any) => (
            <li key={repo.id}>
              <Card
                id={repo.id}
                likes={repo.likes}
                techs={['asdf']}
                title={repo.title}
                url={repo.url}
              />
            </li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
}
