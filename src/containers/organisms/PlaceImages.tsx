/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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

        let currentKey = '';
        const images: any = [];

        Contents?.forEach((content) => {
          const keyMatch = content.Key?.match(/\/(.*?)\//);
          if (keyMatch === undefined || keyMatch === null) return;
          const key = keyMatch[1];

          if (key !== currentKey) {
            images.push({
              key,
              sources: [content.Key],
            });
            currentKey = key;
          } else {
            images[images.length - 1].sources.push(content.Key);
          }
        });

        return images;
      }),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  if (data === undefined) return <div>No images</div>;

  return <PlaceImages images={data} />;
};

export default EnhancedPlaceImages;
