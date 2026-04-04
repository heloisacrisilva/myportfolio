'use client';

import { useTheme } from '@/contexts/themeProviders';
import { themes } from '@/themes';
import SwitchButton from '@/components/Buttons/SwitchButton';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme =
      theme === themes.lightTheme ? 'darkTheme' : 'lightTheme';

    setTheme(themes[newTheme as keyof typeof themes]);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <SwitchButton
      onToggle={handleThemeToggle}
      value={theme === themes.darkTheme}
    />
  );
};

export default ThemeSwitcher;