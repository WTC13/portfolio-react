import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#ececec',
      },
      secondary: {
        main: '#3d4affb8',
      },
    },
    typography: {
        fontFamily: [
          "Roboto",
          "Agency FB"
        ].join(','),
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;