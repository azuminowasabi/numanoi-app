import { VFC } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import HomeButton from 'containers/molecules/HomeButton';
import PlaceImages from 'containers/organisms/PlaceImages';
import PlaceBeforeAfter from 'components/organisms/PlaceBeforeAfter';

const Gallery: VFC<RouteComponentProps> = ({ match }) => (
  <>
    <HomeButton />
    <header>
      <h1>ギャラリー</h1>
    </header>
    <Route path={`${match.path}/:placeCode`}>
      <PlaceBeforeAfter />
      <PlaceImages />
    </Route>
  </>
);

export default Gallery;
