import { makeStyles } from '@material-ui/core';
import { VFC } from 'react';
import TransformIcon from '@material-ui/icons/Transform';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ViewListIcon from '@material-ui/icons/ViewList';
import LandscapeIcon from '@material-ui/icons/Landscape';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  icon: {
    marginRight: '10px',
  },
});

export const BeforeAfterIcon: VFC = () => {
  const classes = useStyles();

  return <TransformIcon className={classes.icon} fontSize="large" />;
};

export const ProgressIcon: VFC = () => {
  const classes = useStyles();

  return <ViewCarouselIcon className={classes.icon} fontSize="large" />;
};

export const HistoryIcon: VFC = () => {
  const classes = useStyles();

  return <ViewListIcon className={classes.icon} fontSize="large" />;
};

export const OutsideIcon: VFC = () => {
  const classes = useStyles();

  return <LandscapeIcon className={classes.icon} fontSize="large" />;
};

export const InsideIcon: VFC = () => {
  const classes = useStyles();

  return <HomeIcon className={classes.icon} fontSize="large" />;
};
