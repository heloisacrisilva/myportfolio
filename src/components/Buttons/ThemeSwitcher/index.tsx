'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/themeProviders';
import { themes } from '@/themes';

import SwitchButton from '@/components/Buttons/SwitchButton';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const getSavedTheme = () => {
    return localStorage.getItem('theme');
  };

  const handleThemeToggle = () => {
    const newTheme = theme === themes.lightTheme ? 'darkTheme' : 'lightTheme';
    setTheme(themes[newTheme as keyof typeof themes]);

    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = getSavedTheme();
    if (savedTheme) {
      setTheme(themes[savedTheme as keyof typeof themes]);
    }
  }, [setTheme]);

  return <SwitchButton onChange={handleThemeToggle} value={theme === themes.darkTheme ? true : false} />;
};

export default ThemeSwitcher;
