/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { VFC } from 'react';
import PlaceBeforeAfter from 'components/organisms/PlaceBeforeAfter';
import AWS from 'aws-sdk';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';

// Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-1:1652c38e-5e23-4735-bccb-f5cca49bd66b',
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const bucketParam = {
  Bucket: 'numanoi-app-before-after',
};

const EnhancedPlaceBeforeAfter: VFC = () => {
  const { placeCode } = useParams<{ placeCode: string }>();

  const config = {
    ...bucketParam,
    Prefix: placeCode,
  };

  const { isLoading, error, data } = useQuery('beforeAfter', () =>
    s3
      .listObjectsV2(config)
      .promise()
      .then(({ Contents }) => {
        Contents?.shift();

        return {
          after: Contents![0].Key,
          before: Contents![1].Key,
        };
      }),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  if (data === undefined) return <div>No images</div>;

  return <PlaceBeforeAfter beforeSrc={data.before} afterSrc={data.after} />;
};
export default EnhancedPlaceBeforeAfter;
