import { AppBar, Toolbar } from '@material-ui/core';
import { VFC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      margin: 'o auto',
    },
  }),
);

const Header: VFC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <img src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="hoge" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
