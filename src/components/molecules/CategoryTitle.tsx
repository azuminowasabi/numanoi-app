import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { VFC } from 'react';
import {
  BeforeAfterIcon,
  HistoryIcon,
  InsideIcon,
  OutsideIcon,
  ProgressIcon,
} from './Icons';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      margin: '20px 0 10px',
    },
  }),
);

const CategoryTitle: VFC<{ title: string }> = ({ title }) => {
  const classes = useStyles();

  const icon = () => {
    switch (title) {
      case 'Before and After':
        return <BeforeAfterIcon />;
      case 'Progress':
        return <ProgressIcon />;
      case 'History':
        return <HistoryIcon />;
      case '屋外':
        return <OutsideIcon />;
      case '屋内':
        return <InsideIcon />;
      default:
        return null;
    }
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.title}
    >
      <Grid item>{icon()}</Grid>
      <Grid item>
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CategoryTitle;
