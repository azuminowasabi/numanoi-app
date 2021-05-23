/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { VFC } from 'react';
import PlaceImages from 'containers/organisms/PlaceImages';
import { PlaceDetail } from 'data/places';

type Props = {
  name: string;
  places: PlaceDetail[];
};

const PlaceGalleries: VFC<Props> = ({ name, places }) => (
  <>
    <h2>{name}</h2>
    {places.map((place) => (
      <PlaceImages
        placeCode={place.code}
        key={place.code}
        alias={place.alias}
      />
    ))}
  </>
);

export default PlaceGalleries;
