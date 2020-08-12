import React from 'react';

// interface
import { IMenu } from './menu.interface';

// styled
import { Container } from './menu.styled';

export default function Menu() {
  return (
    <Container>
      <label>Repository List</label>
      <label>Add repository</label>
      <label>Delete repository</label>
    </Container>
  );
}
