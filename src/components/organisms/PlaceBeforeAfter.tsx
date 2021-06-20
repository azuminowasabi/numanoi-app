/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CategoryTitle from 'components/molecules/CategoryTitle';
import { VFC } from 'react';
import ReactBeforeAfter from 'react-before-after';

type Props = {
  beforeSrc: any;
  afterSrc: any;
};

const baseUrl =
  'https://numanoi-app-before-after.s3-ap-northeast-1.amazonaws.com/';

const PlaceBeforeAfter: VFC<Props> = ({ beforeSrc, afterSrc }) => (
  <>
    <CategoryTitle title="Before and After" />
    <ReactBeforeAfter
      beforeSrc={`${baseUrl}${beforeSrc}`}
      afterSrc={`${baseUrl}${afterSrc}`}
    />
  </>
);

export default PlaceBeforeAfter;
