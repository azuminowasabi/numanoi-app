import { VFC } from 'react';
import PlaceList from 'components/organisms/PlaceList';

const Home: VFC = () => (
  <>
    <h2>施工場所</h2>
    <PlaceList />
  </>
);
export default Home;

/**
 * メモ
 * 施工場所一覧の取得方法について
 * １ ベタ書き
 * 2 listObjectV2で取得した結果に対して最初の"/"より前の文字列だけを取得する、各ギャラリーページでは再度listObjectV2で画像を取得
 * 3 listObjectV2で取得した結果に対して最初の"/"より前の文字列だけを取得する、取得した一覧データはそのまま再利用
 */
