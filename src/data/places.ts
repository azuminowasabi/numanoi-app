export type Place = {
  code: string;
  name: string;
  desc: string;
};

export const places: Place[] = [
  {
    code: 'Inside',
    name: '屋内',
    desc: 'キッチン、トイレ、和室、ダイニング...',
  },
  {
    code: 'Outside',
    name: '屋外',
    desc: '東側庭、南側庭、西側庭、駐車場...',
  },
];
