import React from 'react';

// component
import Card from '../components/card-repository/card.component';

// shared
import Menu from '../../../../../shared/menu/menu.component';

export default function RepositoryList() {
  return (
    <div>
      <Menu />
      <Card id={1} likes={2} techs={['asdf']} title="ok" url="asdf" />
      <h1>this page is list repository</h1>
    </div>
  );
}
