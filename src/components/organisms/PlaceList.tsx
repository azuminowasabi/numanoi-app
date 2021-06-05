/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { VFC } from 'react';

import { placesData } from 'data/places';
import PlaceCard from './PlaceCard';

const PlaceList: VFC = () => (
  <>
    {placesData.map((placeData) => (
      <PlaceCard places={placeData.details} key={placeData.name} />
    ))}
  </>
);

export default PlaceList;
