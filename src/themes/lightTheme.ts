import commonTheme from './commonTheme';
import { iTheme } from './iThemes';

const theme: iTheme = {
  ...commonTheme,

  primaryBackground: '#FFFFFF' /*White*/,
  secondaryBackground: '#EBEBEB' /*Gray*/,

  opacitybackground100: '#FFFFFF',

  primaryColor: '#1E1E1E' /*Dark Zinc*/,
  secondaryColor: '#e91e62b5' /*pink*/,

  dayBorder: '#EBEBEB',

  neutral: '#949494' /*Light Zinc*/,
  neutral2: '#EBEBEB' /* Gray */,
  neutral3: '#EBEBEB' /* Gray */,
  neutral4: '#949494' /* Light Zinc */,
  neutral5: '#e91e62b5' /* pink */,
  neutral6: '#e91e6220' /* pink 20%*/,
  neutral7: '#e91e6220' /* pink 20%*/,
  neutral8: '#1E1E1E25' /* darkZinc with opacity 25% */,
  neutral9: '#d27c90bd' /*  pink red */,
  neutral10: '#e96490b5' /*  pink red */,
  neutral11: '#EBEBEB' /* Light Zinc */,
  neutral12: '#E4E3E3',
  neutral13: '#949494' /*Light Zinc*/,
  neutral14: '#EBEBEB' /* Gray */,
  neutral15: '#1E1E1E' /*Dark Zinc*/,

  primaryHover: '#d27c90',
  secondaryHover: '#d27c909f',
  opacityHover100: '#d27c9075',
  opacityHover200: '#e91e62d6',
  opacityHover300: '#d27c9058',
  opacityHover400: '#00000015' /* dark with 15% opacity*/,
  opacityHover500: '#e91e6276' /* pink with 25% opacity*/,
  opacityHover600: '#e91e6247' /*  pink 15% */,
};

export default theme;
