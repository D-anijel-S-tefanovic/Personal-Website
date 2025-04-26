import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
