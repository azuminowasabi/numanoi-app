/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import PlaceList from 'components/organisms/PlaceList';
import { placesData } from 'data/places';
import { VFC } from 'react';

const EnhancedPlaceList: VFC = () => {
  const places = Object.keys(placesData).map((code) => ({
    code,
    name: placesData[code].name,
    desc: placesData[code].desc,
  }));

  return <PlaceList places={places} />;
};

export default EnhancedPlaceList;
