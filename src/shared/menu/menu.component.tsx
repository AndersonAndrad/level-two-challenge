import React from 'react';

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
