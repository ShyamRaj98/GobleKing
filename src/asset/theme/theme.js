import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.2,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
        button: {
            fontSize: '1rem',
            textTransform: 'uppercase',
            fontWeight: 600,
        },
    },
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },

        MuiAppBar: {  
            styleOverrides: {
                colorPrimary: {
                    width:'auto',
                    backgroundColor: "transparent",
                    boxShadow: 'none',
                    left: 0,
                    right: 'auto'
                }
            }
        }

    },
});

export default theme;