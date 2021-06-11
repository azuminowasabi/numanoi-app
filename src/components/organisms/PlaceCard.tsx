/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { PlaceDetail } from 'data/places';
import { Grid } from '@material-ui/core';
import '../css/placeCard.css';

type Props = {
  places: PlaceDetail[];
};

const PlaceCard: VFC<Props> = ({ places }) => (
  <>
    <Grid container spacing={1} alignItems="center">
      {places.map((place) => (
        <Grid item xs={6} sm={4} md={3} key={place.code}>
          <Link to={`gallery/${place.code}`} key={place.code}>
            <div className="card-container">
              <img
                src={`${process.env.PUBLIC_URL}/assets/thumbnails/${place.code}.jpeg`}
                alt="hoge"
              />
              <p>{place.alias}</p>
            </div>
          </Link>
        </Grid>
      ))}
    </Grid>
  </>
);

export default PlaceCard;
