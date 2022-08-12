import { createTheme } from "@mui/material";
import { primaryColor, neutralColor, gradientColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'black',
    },
    secundary: {
      main: gradientColor,
      contrastText: "white",
    },
    text: {
      primary: neutralColor,
    },
    background: '#E5E5E5',
  },
  typography: {
    fontFamily: [
      'Roboto',
      /* '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"', */
    ].join(','),
  },
});

//"#FE6B8B"
export default theme;

/* const theme = createTheme({
    typography: {
      fontFamily: 'Time newa Roman Ms'
    },
    components:{
        MuiButton:{
          // com as variantes é pessoível estilizar botões que seguem o mesmo estilo
          variants: [
            {
              props: { variant: 'primary' },
              style: {
                background: 'linear-gradient(50deg, #F25 0%, #f02754 100%)',
                color: '#ffffff',
              },
            },
            {
              props: { variant: 'secondary' },
              style: {
                background: 'transparent',
                border: '1px solid #059570',
                color: '#059563'
              },
            },
          ],

          // aqui sobrescreve o default geral
          styleOverrides: {
            root: {
              borderRadius: '12px',
              padding:'8px',
              textTransform:'capitalize',
              fontWeight:'700'
            },
          },
        }
    }
  });
  export default theme; */