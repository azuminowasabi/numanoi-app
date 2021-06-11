/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from 'components/pages/Home';
import Gallery from 'components/pages/Gallery';
import Header from 'components/organisms/Header';

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery" component={Gallery} />
        <Redirect to="/" />
      </Switch>
    </div>
  </QueryClientProvider>
);

export default App;
