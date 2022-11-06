import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

import { tg } from './tgConfig';

const App = () => {
  useEffect(() => tg.ready(), []);

  return <Header />;
};

export default App;
