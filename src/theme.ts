import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#0e0e10',
      },
      secondary: {
        main: '#713112',
      },
    },
    typography: {
        fontFamily: [
          "Roboto",
          // "Agency FB",
          "Sans"
        ].join(','),
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;