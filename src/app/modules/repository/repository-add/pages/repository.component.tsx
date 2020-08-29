import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../../../service/api/level-one-api';

// shared
import Menu from '../../../../../shared/menu/menu.component';

// styles
import {
  Container,
  ContainerInput,
  ContainerMenu,
  Input,
  ContainerButton,
} from './repository.styled';

export default function RepositoryAdd() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [techs, setTechs] = useState('');

  const history = useHistory();

  function handleSubmit(event: any) {
    event.preventDefault();
    api.post('/repositories', {
      title,
      url,
      techs,
    });
    history.push('');
  }

  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>
      <form onSubmit={handleSubmit}>
        <ContainerInput>
          {/* title */}
          <Input>
            <label>Title</label>
            <input onChange={(event) => setTitle(event.target.value)} />
          </Input>
          {/* Url */}
          <Input>
            <label>Url</label>
            <input onChange={(event) => setUrl(event.target.value)} />
          </Input>
          {/* Techs */}
          <Input>
            <label>Techs</label>
            <input onChange={(event) => setTechs(event.target.value)} />
          </Input>
        </ContainerInput>
        <ContainerButton>
          <button type="submit">Add</button>
        </ContainerButton>
      </form>
    </Container>
  );
}
