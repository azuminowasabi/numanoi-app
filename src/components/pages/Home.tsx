import { VFC } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Place } from '../../data/places';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home: VFC<{ places: Place[] }> = ({ places }) => {
  const classes = useStyles();

  return (
    <>
      <h2>施工場所</h2>
      {places.map((place) => (
        <Link to={`gallery/${place.code}`} key={place.code}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {place.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {place.desc}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};
export default Home;
