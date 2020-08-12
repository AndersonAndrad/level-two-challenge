import React from 'react';

// interface
import { ICard } from './card.interface';

// styles
import { Container, ContainerData, ContainerLike } from './card.styled';

export default function CardRepository(props: ICard) {
  return (
    <Container>
      <ContainerData>
        <label>ID: {props.id}</label>
        <label>Title: {props.title}</label>
        <label>URL:{props.url}</label>
        <label>Techs:{props.techs}</label>
      </ContainerData>
      <ContainerLike>
        <label>{props.likes}</label>
      </ContainerLike>
    </Container>
  );
}
