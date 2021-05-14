/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ListObjectsV2OutputCustom, imageData } from 'data/images';
import { VFC } from 'react';
import PlaceImages, { tileData } from 'components/organisms/PlaceImages';
import { useParams } from 'react-router';
import { placesData } from 'data/places';

const PlaceGalleries: VFC = () => {
  const { placeCode } = useParams<{ placeCode: string }>();
  const places = placesData[placeCode];

  const baseUrl =
    'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

  const data: ListObjectsV2OutputCustom = imageData;

  const images: tileData[] = data.Contents.map((content) => ({
    img: `${baseUrl + String(content.Key)}`,
    title: 'sample',
    author: 'author',
  }));

  return (
    <>
      <h2>{places.name}</h2>
      {places.details.map((place) => (
        <PlaceImages images={images} key={place} />
      ))}
    </>
  );
};

export default PlaceGalleries;
