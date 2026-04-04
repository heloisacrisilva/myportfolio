import { iCommonTheme } from './iThemes';

const commonTheme: iCommonTheme = {
  commonColors: {
    primary: '#000000' /*Black*/,
    second: '#FFFFFF' /*White*/,

    lightZinc: '#949494' /* lightZinc*/,
    darkZinc: '#1E1E1E' /* darkZinc*/,
    darkZinc25: '#1E1E1E25' /* darkZinc with opacity 25% */,

    pink: '#E91E63',
    lightPink: '#f4c5d0' ,
    neutral: '#8a7174' ,

    neutral25: '#00000025' /*Black opacity 25%*/,

    primaryGradient: 'linear-gradient(90deg, #E91E63 0%, #c84c69 100%)',
    secondaryGradient: 'linear-gradient(90deg, #c84c69 0%, #8a7174 100%)',

    radialGradient: 'radial-gradient(60.26% 205.78% at 50% 50%, #E91E63 0%, #c84c69d8 70.16%, #8a7174 100%)',

    opacitybackground100: '#e91e6298' /*pink with opacity 40%*/,
    opacitybackground200: '#e91e6244' /*pink with opacity 80%*/,
    opacitybackground300: '#e91e62d9' /*pink with opacity 25%*/,
  },
  fonts: {
    helveticaExtraBold: 'HelveticaNowforMonksExtraBold',
    helveticaBold: 'HelveticaNowforMonksBold',
    helveticaMedium: 'HelveticaNowforMonksMedium',
    sizer: {
      sm: '0.625rem',
      md: '0.75rem',
      lg: '0.875rem',
      xl: '1rem',
      xxl: '1.5rem',
      xxxl: '3rem',
      xxxxl: '6rem',
    },
    lineHeight: {
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
      xxxl: '4rem',
    },
  },
  borderRadius: {
    sm: '0.25rem',
    xl: '1.5rem',
    xxl: '4rem',
  },
  gap: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};

export default commonTheme;
