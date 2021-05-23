/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import PlaceGalleries from 'components/templates/PlaceGalleries';
import { placesData } from 'data/places';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import AWS from 'aws-sdk';

// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:1652c38e-5e23-4735-bccb-f5cca49bd66b',
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const bucketParam = {
  Bucket: 'numanoi-app-resized',
};

const EnhancedPlaceGalleries: VFC = () => {
  const { placeCode } = useParams<{ placeCode: string }>();
  const places = placesData[placeCode].details;

  const config = {
    ...bucketParam,
    Prefix: placeCode,
  };

  const { isLoading, error, data } = useQuery(placeCode, () =>
    s3
      .listObjectsV2(config)
      .promise()
      .then((res) => {
        const images = places.map((place) => {
          const contents = res.Contents?.filter((content) =>
            content.Key?.includes(place.code),
          );

          contents?.shift();

          const tileData = contents?.map((content) => ({
            source: content.Key,
            title: content.Key?.substr(-20).substr(0, 8),
          }));

          return {
            alias: place.alias,
            tileData,
          };
        });

        return images;
      }),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  if (data === undefined) return <div>No images</div>;

  return <PlaceGalleries images={data} />;
};

export default EnhancedPlaceGalleries;
