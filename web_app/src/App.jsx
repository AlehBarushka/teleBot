import { useEffect } from 'react';
import Header from './components/Header';

import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button';

const App = () => {
  const { tg, toggleButton } = useTelegram();

  useEffect(() => tg.ready(), [tg]);

  return (
    <>
      <Header />
      <Button onClick={toggleButton}>toggle</Button>
    </>
  );
};

export default App;
