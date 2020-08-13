import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// shared
import Menu from '../../../../../shared/menu/menu.component';

import {
  Container,
  ContainerInput,
  ContainerMenu,
  ContainerText,
} from './repository.styled';

export default function RepositoryDelete() {
  const [id, setId] = useState('');
  const { handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>
      <ContainerInput>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerText>
            <label>Repository ID</label>
            <input id="repositoryID" type="text" placeholder="asdfasdfasdf" />
          </ContainerText>
          <button type="submit">Delete</button>
        </form>
      </ContainerInput>
    </Container>
  );
}
