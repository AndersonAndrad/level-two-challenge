import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// api
import api from '../../../../../service/api/level-one-api';

// shared
import Menu from '../../../../../shared/menu/menu.component';

import {
  Container,
  ContainerInput,
  ContainerMenu,
  ContainerText,
} from './repository.styled';

export default function RepositoryDelete() {
  const [repositoryID, setRepositoryID] = useState('');
  const history = useHistory();

  function handleEvent() {
    repositoryID
      ? api.delete(`/repositories/${repositoryID}`)
      : console.log(`don't have ${repositoryID}`);
    history.push('');
  }

  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>
      <ContainerInput>
        <ContainerText>
          <label>Repository ID</label>
          <input
            id="repositoryID"
            type="text"
            placeholder="Ex: 88e33182-6f30-4f62-97b9-9ea8f5852782"
            onChange={(event) => setRepositoryID(event.target.value)}
          />
        </ContainerText>
        <button onClick={handleEvent}>Delete</button>
      </ContainerInput>
    </Container>
  );
}
