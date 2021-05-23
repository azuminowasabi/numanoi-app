/**
 * 家の中(Inside)
 *  玄関
 *  キッチン
 *  風呂
 *  トイレ
 *  ダイニング
 *  和室1
 *  和室2
 *  天井
 *  離れ
 *
 * 家の外(Outside)
 *  道
 *  駐車場
 *  池
 *  入り口前
 *  東庭 (倉庫の場所)
 *  南庭 (第二焼却炉)
 *  西庭 (杭のある場所)
 *  第一焼却炉
 *
 *
 */

type Place = {
  id: number;
  name: string;
  desc: string;
  details: PlaceDetail[];
};

export type PlaceDetail = {
  code: string;
  alias: string;
};

export type PlacesData = { [PlaceCode: string]: Place };

export const placesData: PlacesData = {
  Inside: {
    id: 1,
    name: '屋内',
    desc: '家の中',
    details: [
      {
        code: 'entrance',
        alias: '玄関',
      },
      {
        code: 'kitchen',
        alias: 'キッチン',
      },
      {
        code: 'bath',
        alias: '風呂場',
      },
      {
        code: 'restroom',
        alias: 'トイレ',
      },
      {
        code: 'dining',
        alias: '居間',
      },
      {
        code: 'jproom1',
        alias: '和室1',
      },
      {
        code: 'jproom2',
        alias: '和室2',
      },
      {
        code: 'annex',
        alias: '離れ',
      },
    ],
  },
  Outside: {
    id: 2,
    name: '屋外',
    desc: '家の外',
    details: [
      {
        code: 'street',
        alias: '通り',
      },
      {
        code: 'parking',
        alias: '駐車場',
      },
      {
        code: 'pond',
        alias: '池',
      },
      {
        code: 'front-entrance',
        alias: '家の前',
      },
      {
        code: 'east-garden',
        alias: '東側庭',
      },
      {
        code: 'south-garden',
        alias: '南側庭',
      },
      {
        code: 'west-garden',
        alias: '西側庭',
      },
      {
        code: 'shoukyakuro1',
        alias: '焼却炉1',
      },
      {
        code: 'shoukyakuro2',
        alias: '焼却炉2',
      },
    ],
  },
};
