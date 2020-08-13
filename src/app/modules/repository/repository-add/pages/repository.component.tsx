import React from 'react';

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
  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>
      <ContainerInput>
        {/* title */}
        <Input>
          <label>Title</label>
          <input />
        </Input>
        {/* Url */}
        <Input>
          <label>Url</label>
          <input />
        </Input>
        {/* Techs */}
        <Input>
          <label>Techs</label>
          <input />
        </Input>
      </ContainerInput>
      <ContainerButton>
        <button>Add</button>
      </ContainerButton>
    </Container>
  );
}
