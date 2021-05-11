export type Place = {
  code: string;
  name: string;
  desc: string;
  details: string[];
};

export const places: Place[] = [
  {
    code: 'Inside',
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
  {
    code: 'Outside',
    name: '屋外',
    desc: '東側庭、南側庭、西側庭、駐車場...',
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
];

/**
 * 家の中
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
 * 家の外
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
