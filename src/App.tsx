import { FC } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/pages/Home';
import Galley from './components/pages/Galley';

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery" component={Galley} />
        <Redirect to="/" />
      </Switch>
    </div>
  </QueryClientProvider>
);

export default App;
