/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import HomeButton from 'containers/molecules/HomeButton';
import PlaceGalleries from 'containers/templates/PlaceGalleries';

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
