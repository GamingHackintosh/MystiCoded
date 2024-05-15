import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d32f2f',
        },
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export default theme;
