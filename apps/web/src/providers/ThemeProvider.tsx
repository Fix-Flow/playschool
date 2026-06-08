/**
 * Theme Provider
 *
 * Manages light/dark/system theme with CSS class toggling.
 */

import { ReactNode, useEffect } from 'react';
import { useUIStore } from '@/stores/ui.store';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useUIStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', systemDark);
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return <>{children}</>;
}
