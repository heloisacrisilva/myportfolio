import { iTheme } from './iThemes';
import commonTheme from './commonTheme';

const theme: iTheme = {
  ...commonTheme,

  isDark: true,

  primaryBackground: '#1E1E1E' /* Dark Zinc/Charcoal for cards/alternate sections */,
  secondaryBackground: '#121212' /* Deep dark background for page */,

  opacitybackground100: '#FFFFFF',

  primaryColor: '#F3F4F6' /* Light gray/white for headings */,
  secondaryColor: '#D1D5DB' /* Soft light gray for body text/paragraphs */,

  dayBorder: '#2D2D30' /* Subtle dark border */,

  neutral: '#4D4D54' /* Medium Zinc / Scrollbar thumb */,
  neutral2: '#27272A' /* Dark container */,
  neutral3: '#1E1E1E' /* Opposite of white (for buttons) */,
  neutral4: '#1E1E1E' /* Dark Zinc */,
  neutral5: '#baaee4' /* Purple/Lavender accent */,
  neutral6: '#2D2514' /* Dark golden yellow background for badges */,
  neutral7: '#201B30' /* Dark purple background for cards */,
  neutral8: '#121212' /* Deep dark page background for contact section */,
  neutral9: '#baaee4' /* Purple selection background */,
  neutral10: '#F59E0B' /* Light gold yellow text for badges */,
  neutral11: '#27272A' /* Light gray */,
  neutral12: '#2D2D30',
  neutral13: '#FFFFFF' /* Dark slate */,
  neutral14: '#FFFFFF' /* White */,
  neutral15: '#A1A1AA' /* Switcher icon color */,

  primaryHover: '#a79cd4' /* Hover background for primary actions */,
  secondaryHover: '#201B30',
  opacityHover100: '#201B3080',
  opacityHover200: '#2D251480',
  opacityHover300: '#baaee420',
  opacityHover400: '#ffffff08',
  opacityHover500: '#2D2514',
  opacityHover600: '#201B30',
};

export default theme;
