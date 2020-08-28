import React from 'react';
import { Link } from 'react-router-dom';

// styled
import { Container } from './menu.styled';

export default function Menu() {
  return (
    <Container>
      <Link to="">
        <label>Repository List</label>
      </Link>
      <Link to="add">
        <label>Add repository</label>
      </Link>
      <Link to="delete">
        <label>Delete repository</label>
      </Link>
    </Container>
  );
}
