import { iTheme } from './iThemes';
import commonTheme from './commonTheme';

const theme: iTheme = {
  ...commonTheme,

  primaryBackground: '#2D2D2D' /* Zinc */,
  secondaryBackground: '#0f0f0f' /* Black*/,
  opacitybackground100: '#FFFFFF05' /*white with 5% opacity*/,

  primaryColor: '#FFFFFF' /* white */,
  secondaryColor: '#FFFFFF' /* white */,

  dayBorder: '#2D2D2D',

  neutral: '#949494' /* Light Zinc */,
  neutral2: '#949494' /* Light Zinc */,
  neutral3: '#FFFFFF' /* White */,
  neutral4: '#FFFFFF' /* White */,
  neutral5: '#949494' /* Light Zinc */,
  neutral6: '#949494' /* Light Zinc */,
  neutral7: '#383838' /* Medium Zinc */,
  neutral8: '#1E1E1E85' /* darkZinc with opacity 85% */,
  neutral9: '#6b1330c7' /* dark pink with opacity 15%*/,
  neutral10: '#6b1330' /* dark pink */,
  neutral11: '#383838' /* Medium Zinc */,
  neutral12: '#262626',
  neutral13: '#FFFFFF' /* white */,
  neutral14: '#1E1E1E' /* darkZinc */,
  neutral15: '#949494' /* Light Zinc */,

  primaryHover: 'linear-gradient(90deg, #e91e62b5, #c84c69bd)' /* gradient pink with 25% opacity */,
  secondaryHover: 'linear-gradient(90deg, #e91e622b, #c84c693c)' /* gradient pink with 100% opacity */,

  opacityHover100: '#e91e623f' /*pink with 80% opacity*/,
  opacityHover200: '#FFFFFF05' /*white with 5% opacity*/,
  opacityHover300: '#e91e62e9' /*pink with 5% opacity*/,
  opacityHover400: '#00000020' /*dark with 20% opacity*/,
  opacityHover500: 'linear-gradient(90deg, #e91e6240 0%, #c84c69 100%)' /* Linear violet gradient */,
  opacityHover600: '#e91e6215' /*  pink 25% */,
};

export default theme;
