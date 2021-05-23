import { VFC } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export type tileDataType = {
  source: string;
  title: string;
};

type Props = {
  alias: string;
  tileData: tileDataType[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },

    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    tileRoot: {
      // width: 'auto !important',
      height: 'auto !important',
      // maxWidth: 850,
    },
  }),
);

const PlaceImages: VFC<Props> = ({ alias = '', tileData = [] }) => {
  const classes = useStyles();
  const baseUrl =
    'https://s3.ap-northeast-1.amazonaws.com/numanoi-app-resized/';

  return (
    <div className={classes.root}>
      <h4>{alias}</h4>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((data) => (
          <GridListTile className={classes.tileRoot} key={data.source}>
            <img src={`${baseUrl}${data.source}`} alt={data.source} />
            <GridListTileBar
              title={`${data.title.substr(0, 4)}/${data.title.substr(
                4,
                2,
              )}/${data.title.substr(-2)}`}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default PlaceImages;
