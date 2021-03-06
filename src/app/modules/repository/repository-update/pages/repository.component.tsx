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

export default function RepositoryUpdate() {
  return (
    <Container>
      <ContainerMenu>
        <Menu />
      </ContainerMenu>
      <ContainerInput>
        {/* ID */}
        <Input>
          <label>ID</label>
          <input />
        </Input>
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
        <button>Update</button>
      </ContainerButton>
    </Container>
  );
}
