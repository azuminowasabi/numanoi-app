import { FC } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from './components/pages/Home';
import { places } from './data/places';
import Galley from './components/pages/Galley';

const App: FC = () => (
  <div className="container">
    <Switch>
      <Route exact path="/">
        <Home places={places} />
      </Route>
      <Route path="/gallery" component={Galley} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
