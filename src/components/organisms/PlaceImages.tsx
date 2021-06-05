// import { Grid, makeStyles } from '@material-ui/core';
import Flicking from '@egjs/react-flicking';
import { VFC } from 'react';
import '../css/flicking.css';

export type ImagesType = {
  date: string;
  sources: string[];
};

type Props = {
  alias: string;
  images: ImagesType[];
};

const baseUrl = 'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

const PlaceImages: VFC<Props> = ({ alias, images }) => {
  console.log(images);

  return (
    <>
      <h1>{alias}</h1>

      <Flicking className="flicking flicking0" circular gap={10}>
        {/* {images.map((image) => (
          <div className="panel">
            <h3>{image.date}</h3>
            {image.sources.map((source) => (
              <img src={`${baseUrl}${source}`} alt="source" className="panel" />
            ))}
          </div>
        ))} */}
        {images.map((image) => (
          <>
            {/* <h3>{image.date}</h3> */}
            {image.sources.map((source) => (
              <div className="img-container">
                <img
                  src={`${baseUrl}${source}`}
                  alt={source}
                  className="panel"
                />
                <p>{image.date}</p>
              </div>
            ))}
          </>
        ))}
      </Flicking>
    </>
  );
};

export default PlaceImages;
