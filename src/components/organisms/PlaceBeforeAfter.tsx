/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CategoryTitle from 'components/molecules/CategoryTitle';
import { VFC } from 'react';
import ReactBeforeAfter from 'react-before-after';

// type Props = {
//   beforeSrc: string;
//   afterSrc: string;
// };

const PlaceBeforeAfter: VFC = () => (
  <>
    <CategoryTitle title="Before and After" />
    <ReactBeforeAfter
      beforeSrc="https://numanoi-app-resized.s3-ap-northeast-1.amazonaws.com/street/2021012414405013.JPG"
      afterSrc="https://numanoi-app-resized.s3-ap-northeast-1.amazonaws.com/street/2021050311532848.JPG"
    />
  </>
);

export default PlaceBeforeAfter;
