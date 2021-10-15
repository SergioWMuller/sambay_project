import Home from "./pages";
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#theme={theme}',
      main: '#23AAC0',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
})

export default function App() {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}