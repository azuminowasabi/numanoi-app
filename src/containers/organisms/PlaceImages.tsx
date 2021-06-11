/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { VFC } from 'react';
import AWS from 'aws-sdk';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import PlaceImages from 'components/organisms/PlaceImages';

// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:1652c38e-5e23-4735-bccb-f5cca49bd66b',
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const bucketParam = {
  Bucket: 'numanoi-app-resized',
};

const EnhancedPlaceImages: VFC = () => {
  const { placeCode } = useParams<{ placeCode: string }>();

  const config = {
    ...bucketParam,
    Prefix: placeCode,
  };

  const { isLoading, error, data } = useQuery(placeCode, () =>
    s3
      .listObjectsV2(config)
      .promise()
      .then(({ Contents }) => {
        Contents?.shift();
        const images = Contents?.map((content) => ({
          source: content.Key,
          title: content.Key?.substr(-20).substr(0, 8),
        }));

        return {
          alias: placeCode,
          images,
        };
      }),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  if (data === undefined) return <div>No images</div>;

  return <PlaceImages alias={data.alias} images={data.images} />;
};

export default EnhancedPlaceImages;
