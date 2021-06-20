import { VFC } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import HomeButton from 'containers/molecules/HomeButton';
import PlaceImages from 'containers/organisms/PlaceImages';
import PlaceBeforeAfter from 'containers/organisms/PlaceBeforeAfter';
import History from 'components/organisms/History';
import { createStyles, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    block: {
      marginBottom: 20,
    },
  }),
);

const Gallery: VFC<RouteComponentProps> = ({ match }) => {
  const classes = useStyles();

  return (
    <>
      <header>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <HomeButton />
          </Grid>
          <Grid item xs={11}>
            <h1 className="title pr-35">Gallery</h1>
          </Grid>
        </Grid>
      </header>
      <Route path={`${match.path}/:placeCode`}>
        <div className={classes.block}>
          <PlaceBeforeAfter />
        </div>
        <div className={classes.block}>
          <PlaceImages />
        </div>
        <div className={classes.block}>
          <History />
        </div>
      </Route>
    </>
  );
};

export default Gallery;
