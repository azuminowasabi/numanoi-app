/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import PlaceImages from 'components/organisms/PlaceImages';

type imagesType = {
  alias: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tileData: any;
};

type Props = {
  images: imagesType[];
};

const PlaceGalleries: VFC<Props> = ({ images }) => (
  <>
    {images.map((image) => (
      <PlaceImages
        key={image.alias}
        tileData={image.tileData}
        alias={image.alias}
      />
    ))}
  </>
);

export default PlaceGalleries;
