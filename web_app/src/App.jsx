import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => tg.ready(), []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className='header'>
      <p>some text</p>
      <button onClick={onClose}>close</button>
      <span></span>
    </div>
  );
};

export default App;
