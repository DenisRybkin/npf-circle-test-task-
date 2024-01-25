import { useTheme } from '@app/providers/theme/useTheme';
import { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.add('dark');

    //Light theme is not done, because only dark

    // switch (theme) {
    //   case 'dark':
    //     return document.documentElement.classList.add('dark');
    //   case 'light':
    //     return document.documentElement.classList.remove('dark');
    // }
  }, [theme]);

  return <>{props.children}</>;
};
