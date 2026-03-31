import 'styled-components';
import { iTheme } from '@/themes/iThemes';
import { iCommonTheme } from '@/themes/iThemes';

declare module 'styled-components' {
  export interface DefaultTheme extends iTheme, iCommonTheme {}
}
