import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

export function LightModeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Toggle Theme">
        <IconButton sx={{ ml: 1 }} onClick={() => colorMode.toggleColorMode()} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness3Icon /> : <Brightness7Icon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export function ColorModeToggler({children}) {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
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
