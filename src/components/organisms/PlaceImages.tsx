/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Flicking from '@egjs/react-flicking';
import CategoryTitle from 'components/molecules/CategoryTitle';
import { VFC } from 'react';
import '../css/flicking.css';

type Props = {
  images: any;
};

const baseUrl = 'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

const PlaceImages: VFC<Props> = ({ images }) => (
  <>
    <CategoryTitle title="Progress" />
    {images.map((image: any) => (
      <Flicking
        className="flicking flicking1"
        hanger="0"
        anchor="0"
        moveType="freeScroll"
        gap={5}
      >
        {image.sources?.map((source: any) => (
          <div className="img-container" key={source.source}>
            <img
              src={`${baseUrl}${source.source}`}
              alt={source.title}
              className="panel"
            />
            <p>{`${source.title.substr(0, 4)}/${source.title.substr(
              4,
              2,
            )}/${source.title.substr(-2)}`}</p>
          </div>
        ))}
      </Flicking>
    ))}
  </>
);

export default PlaceImages;
