import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Tooltip from '@mui/material/Tooltip';

import useLocalStorage from './hooks/local_storage';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export function LightModeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Toggle Theme">
        <IconButton sx={{ ml: 1 }} onClick={() => colorMode.toggleColorMode()} color="inherit">
          {theme.palette.mode === 'dark' ? <NightsStayIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export function ColorModeToggler({children}) {
  const [mode, setMode] = useLocalStorage("theme", "dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [setMode],
  );

  const theme = React.useMemo(
    () =>
      mode === 'dark' ? darkTheme: lightTheme,
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
