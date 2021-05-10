import { VFC } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import HomeButton from 'containers/molecules/HomeButton';
import PlaceGalleries from '../templates/PlaceGalleries';

const Galley: VFC<RouteComponentProps> = ({ match }) => (
  <>
    <HomeButton />
    <header>
      <h1>ギャラリー</h1>
    </header>
    <Route path={`${match.path}/:placeCode`}>
      <PlaceGalleries />
    </Route>
  </>
);

export default Galley;
