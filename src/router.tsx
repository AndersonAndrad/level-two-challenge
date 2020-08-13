import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import RepositoryList from './app/modules/repository/repository-list/pages/repository.component';
import RepositoryDelete from './app/modules/repository/repository-delete/pages/repository.component';
import RepositoryAdd from './app/modules/repository/repository-add/pages/repository.component';
import RepositoryUpdate from './app/modules/repository/repository-update/pages/repository.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RepositoryList} />
        <Route path="/delete" exact component={RepositoryDelete} />
        <Route path="/add" exact component={RepositoryAdd} />
        <Route path="/update" exact component={RepositoryUpdate} />
      </Switch>
    </BrowserRouter>
  );
}
