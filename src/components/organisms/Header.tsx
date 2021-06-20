import { AppBar, Toolbar } from '@material-ui/core';
import { VFC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      flexGrow: 1,
      justifyContent: 'center',
    },
  }),
);

const Header: VFC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="hoge" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
