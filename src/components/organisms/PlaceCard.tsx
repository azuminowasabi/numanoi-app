/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
import { VFC } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { PlaceDetail } from 'data/places';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  places: PlaceDetail[];
};

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

const PlaceCard: VFC<Props> = ({ places }) => {
  const classes = useStyles();

  return (
    <>
      {places.map((place) => (
        <Link to={`gallery/${place.code}`} key={place.code}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {place.alias}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default PlaceCard;
