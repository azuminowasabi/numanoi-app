/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import PlaceGalleries from 'components/templates/PlaceGalleries';
import { placesData } from 'data/places';
import { useParams } from 'react-router';

const EnhancedPlaceGalleries: VFC = () => {
  const { placeCode } = useParams<{ placeCode: string }>();
  const places = placesData[placeCode].details;

  return <PlaceGalleries name={placeCode} places={places} />;
};

export default EnhancedPlaceGalleries;
