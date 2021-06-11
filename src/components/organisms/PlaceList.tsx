/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { VFC } from 'react';

import { placesData } from 'data/places';
import CategoryTitle from 'components/molecules/CategoryTitle';
import PlaceCard from './PlaceCard';

const PlaceList: VFC = () => (
  <>
    {placesData.map((placeData) => (
      <div key={placeData.name}>
        <CategoryTitle title={placeData.name} />
        <PlaceCard places={placeData.details} key={placeData.name} />
      </div>
    ))}
  </>
);

export default PlaceList;
