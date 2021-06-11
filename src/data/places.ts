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
  name: string;
  desc: string;
  details: PlaceDetail[];
};

export type PlaceDetail = {
  code: string;
  alias: string;
};

export const placesData: Place[] = [
  {
    name: '屋内',
    desc: '家の中',
    details: [
      {
        code: 'entrance',
        alias: '玄関',
      },
      {
        code: 'entranceSideWarehouse',
        alias: '玄関横物置',
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
  {
    name: '屋外',
    desc: '家の外',
    details: [
      {
        code: 'street',
        alias: '通り',
      },
      {
        code: 'houseAppearance',
        alias: '家外観',
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
        code: 'frontEntrance',
        alias: '家の前',
      },
      {
        code: 'eastGarden',
        alias: '東側庭',
      },
      {
        code: 'southGarden',
        alias: '南側庭',
      },
      {
        code: 'westGarden',
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
];

type History = {
  id: number;
  date: string;
  title: string;
  desc: string;
};

type Histories = { [placeCode: string]: History[] };

export const histories: Histories = {
  entrance: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  kitchen: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  bath: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  restroom: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  dining: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  jproom1: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  jproom2: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  annex: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  street: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  parking: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  pond: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  frontEntrance: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  eastGarden: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  southGarden: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  westGarden: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  shoukyakuro1: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
  shoukyakuro2: [
    {
      id: 1,
      date: '2020/02/02',
      title: '掃除',
      desc: '家の前に溜まっていたゴミを掃除',
    },
    {
      id: 2,
      date: '2020/03/22',
      title: '水道',
      desc: '水道が出るように調整',
    },
    {
      id: 3,
      date: '2020/05/03',
      title: '撤去',
      desc: '井上を呼んでゴミを回収してもらう',
    },
  ],
};
