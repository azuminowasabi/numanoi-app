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
 */

type Place = {
  id: number;
  name: string;
  desc: string;
  details: string[];
};

export type PlacesData = { [PlaceCode: string]: Place };

export const placesData: PlacesData = {
  Inside: {
    id: 1,
    name: '屋内',
    desc: '家の中',
    details: [
      'entrance',
      'kitchen',
      'bath',
      'restroom',
      'dining',
      'jproom1',
      'jproom2',
      'annex',
    ],
  },
  Outside: {
    id: 2,
    name: '屋外',
    desc: '家の外',
    details: [
      'steet',
      'parking',
      'pond',
      'front-entrance',
      'east-garden',
      'south-garden',
      'west-garden',
      'shoukyakuro1',
    ],
  },
};
