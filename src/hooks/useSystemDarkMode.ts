import {useEffect, useState} from "react";

export function useSystemDarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);

  const darkModeUserPreference = localStorage.getItem('darkModeUserPreference');
  const isDarkModeMatchMedia = window.matchMedia('(prefers-color-scheme: light)');
  const htmlRootElement = document.getElementsByTagName('html')[0];

  useEffect(() => {
    if (darkModeUserPreference != null) {
      setDarkMode(darkModeUserPreference === 'true');
      return;
    }

    // @ts-ignore
    if (typeof window.matchMedia != 'undefined') {
      setDarkMode(!isDarkModeMatchMedia.matches);
    }
  }, [darkModeUserPreference, isDarkModeMatchMedia.matches]);


  htmlRootElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

  window.addEventListener('storage', () => {

    if (darkModeUserPreference != null) {
      htmlRootElement.setAttribute('data-theme', darkModeUserPreference === 'true' ? 'dark' : 'light');
      return;
    }

    function screenTest(e: MediaQueryListEvent) {
      htmlRootElement.setAttribute('data-theme', e.matches ? 'light' : 'dark');
      setDarkMode(!e.matches);
    }

    isDarkModeMatchMedia.addListener(screenTest);
  });


  return isDarkMode;
}