/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { VFC } from 'react';
import PlaceImages from 'components/organisms/PlaceImages';
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

type Props = {
  placeCode: string;
  alias: string;
};

const EnhancedPlaceImages: VFC<Props> = ({ placeCode, alias }) => {
  const config = {
    ...bucketParam,
    Prefix: placeCode,
  };

  const { isLoading, error, data } = useQuery(placeCode, () =>
    s3
      .listObjectsV2(config)
      .promise()
      .then((res) => {
        const baseUrl =
          'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

        // listObjectsV2の返り値であるres.Contens配列の最初の要素はフォルダ自体のパスなので、最初の要素を削除
        res.Contents?.shift();

        const images = res.Contents?.map((content) => {
          const date = content.Key?.slice(-20).slice(0, 8);
          const year = date?.substr(0, 4);
          const month = date?.substr(4, 2);
          const day = date?.substr(-2);

          return {
            img: `${baseUrl}${content.Key}`,
            title: `${year}/${month}/${day}`,
          };
        });

        return images;
      }),
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  if (data === undefined) return <div>No images</div>;

  return <PlaceImages images={data} alias={alias} />;
};

export default EnhancedPlaceImages;
