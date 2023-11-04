import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      100: '#FFF',
      200: '#F4F4F4',
      300: '#E9E9E9',
      400: '#757575',
      500: '#3A3A3A',
      600: '#2D2D2D',
      700: '#1F1F1F',
      800: '#050505',
    },
    accent: '#A445ED',
    error: '#FF5252',
  },
});
export default theme;
