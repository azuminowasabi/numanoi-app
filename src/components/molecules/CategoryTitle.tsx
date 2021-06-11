import { Grid } from '@material-ui/core';
import { VFC } from 'react';
import {
  BeforeAfterIcon,
  HistoryIcon,
  InsideIcon,
  OutsideIcon,
  ProgressIcon,
} from './Icons';

const CategoryTitle: VFC<{ title: string }> = ({ title }) => {
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
    <Grid container direction="row" alignItems="center">
      <Grid item>{icon()}</Grid>
      <Grid item>
        <h2>{title}</h2>
      </Grid>
    </Grid>
  );
};

export default CategoryTitle;
