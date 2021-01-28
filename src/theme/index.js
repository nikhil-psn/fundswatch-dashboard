import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: 'var(--color-surface)',
      default: colors.common.white,
      // paper: colors.common.white,
      paper: 'var(--color-surface)',

    },
    primary: {
      main: '#3a4386'
    },
    secondary: {
      // main: colors.indigo[500],
      main: colors.cyan[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography
});

export default theme;
