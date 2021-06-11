import { AppBar, Toolbar } from '@material-ui/core';
import { VFC } from 'react';

const Header: VFC = () => (
  <AppBar position="static">
    <Toolbar>
      <img src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="hoge" />
    </Toolbar>
  </AppBar>
);

export default Header;
