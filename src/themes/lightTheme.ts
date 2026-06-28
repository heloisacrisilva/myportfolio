import commonTheme from './commonTheme';
import { iTheme } from './iThemes';

const theme: iTheme = {
  ...commonTheme,

  isDark: false,

  primaryBackground: '#FFFFFF' /* White for cards */,
  secondaryBackground: '#FAF9F6' /* Very soft off-white/cream page background */,

  opacitybackground100: '#FFFFFF',

  primaryColor: '#1E1E1E' /* Dark Zinc for headings */,
  secondaryColor: '#2D3142' /* Dark slate gray for body text */,

  dayBorder: '#E5E7EB',

  neutral: '#71717A' /* Medium Zinc */,
  neutral2: '#F3F4F6' /* Light Gray container */,
  neutral3: '#FFFFFF' /* White */,
  neutral4: '#1E1E1E' /* Dark Zinc */,
  neutral5: '#635985' /* Purple accent */,
  neutral6: '#FAF5D9' /* Soft pastel yellow background */,
  neutral7: '#ECE9F8' /* Soft pastel purple background */,
  neutral8: '#FAF9F6' /* Page bg */,
  neutral9: '#635985' /* Purple */,
  neutral10: '#854D0E' /* Dark yellow text */,
  neutral11: '#F3F4F6' /* Light gray */,
  neutral12: '#E5E7EB',
  neutral13: '#2D3142' /* Dark slate */,
  neutral14: '#FFFFFF' /* White */,
  neutral15: '#71717A' /* Zinc */,

  primaryHover: '#52486E',
  secondaryHover: '#ECE9F8',
  opacityHover100: '#ECE9F880',
  opacityHover200: '#FAF5D980',
  opacityHover300: '#63598520',
  opacityHover400: '#00000008',
  opacityHover500: '#FAF5D9',
  opacityHover600: '#ECE9F8',
};

export default theme;
