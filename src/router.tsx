import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import RepositoryList from './app/modules/repository/repository-list/pages/repository.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RepositoryList} />
      </Switch>
    </BrowserRouter>
  );
}
