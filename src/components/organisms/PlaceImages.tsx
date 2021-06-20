import { VFC } from 'react';
import CategoryTitle from 'components/molecules/CategoryTitle';
import Carousel from 'components/organisms/Carousel';

export type Image = {
  key: string;
  sources: string[];
};

type Props = {
  images: Image[];
};

const PlaceImages: VFC<Props> = ({ images }) => (
  <div>
    <h2> Single Item</h2>
    <CategoryTitle title="Progress" />
    {images.map((image) => (
      <Carousel image={image} key={image.key} />
    ))}
  </div>
);
export default PlaceImages;
