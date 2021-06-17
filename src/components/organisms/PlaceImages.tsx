/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Flicking from '@egjs/react-flicking';
import CategoryTitle from 'components/molecules/CategoryTitle';
import { VFC } from 'react';
import '../css/flicking.css';

type Images = {
  key: string;
  sources: string[];
};

type Props = {
  images: Images[];
};

const baseUrl = 'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

const PlaceImages: VFC<Props> = ({ images }) => {
  console.log('props', images);

  return (
    <>
      <CategoryTitle title="Progress" />
      {images.map((image) => (
        <Flicking
          className="flicking flicking1"
          hanger="0"
          anchor="0"
          moveType="freeScroll"
          gap={5}
        >
          {image.sources?.map((source) => (
            <div className="img-container" key={source}>
              <img src={`${baseUrl}${source}`} alt={source} className="panel" />
              <p>{`${source.substr(-20, 4)}/${source.substr(
                -16,
                2,
              )}/${source.substr(-14, 2)}`}</p>
            </div>
          ))}
        </Flicking>
      ))}
    </>
  );
};

export default PlaceImages;
