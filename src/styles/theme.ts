import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#95c453',
      main: '#649323',
      dark: '#346500',
      contrastText: '#fffaec',
    },
    secondary: {
      light: '#ffdb57',
      main: '#f6aa1f',
      dark: '#be7b00',
      contrastText: '#fffaec',
    },
  },
});

export default theme;
