import { VFC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'components/css/react-slick.css';
import { Image } from 'components/organisms/PlaceImages';

type Props = {
  image: Image;
};

const baseUrl = 'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

const Carousel: VFC<Props> = ({ image }) => (
  <Slider
    className="slider variable-width"
    dots
    centerMode
    slidesToShow={1}
    slidesToScroll={1}
    variableWidth
    speed={500}
  >
    {image.sources?.map((source) => (
      <div className="img-container" key={source}>
        <img src={`${baseUrl}${source}`} alt={source} className="panel" />
        <p>{`${source.substr(-20, 4)}/${source.substr(-16, 2)}/${source.substr(
          -14,
          2,
        )}`}</p>
      </div>
    ))}
  </Slider>
);
export default Carousel;
