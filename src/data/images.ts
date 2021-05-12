type CotentsCustom = {
  ETag: string;
  Key: string;
  LastModified: Date;
  Size: number;
  StorageClass: string;
};

export type ListObjectsV2OutputCustom = {
  CommonPrefixes?: [];
  Contents: CotentsCustom[];
  IsTruncated: boolean;
  KeyCount: number;
  MaxKeys: number;
  Name: string;
  Prefix: string;
};

export const placeData: ListObjectsV2OutputCustom = {
  CommonPrefixes: [],
  Contents: [
    {
      ETag: 'd41d8cd98f00b204e9800998ecf8427e',
      Key: 'outside/',
      LastModified: new Date('2021-04-29T14:00:10.000Z'),
      Size: 0,
      StorageClass: 'STANDARD',
    },
    {
      ETag: '666f1b1ef9f24ccae102ea7cb4b54d0e',
      Key: 'outside/2020020214440396.JPG',
      LastModified: new Date('2021-04-29T14:02:13.000Z'),
      Size: 50464,
      StorageClass: 'STANDARD',
    },
    {
      ETag: '0017c1c57687f010f5958507a1ecfd9d',
      Key: 'outside/2020020214362248.JPG',
      LastModified: new Date('2021-02-07T15:55:09.000Z'),
      Size: 15401,
      StorageClass: 'STANDARD',
    },
    {
      ETag: '0017c1c57687f010f5958507a1ecfd9d',
      Key: 'outside/2020020214353094.JPG',
      LastModified: new Date('2021-02-07T15:55:09.000Z'),
      Size: 15401,
      StorageClass: 'STANDARD',
    },
  ],
  IsTruncated: false,
  KeyCount: 4,
  MaxKeys: 1000,
  Name: 'numanoi-app-resized',
  Prefix: 'outside',
};
