import React from 'react';
import { useTelegram } from '../hooks/useTelegram';
import Button from './Button';

const Header = () => {
  const { onClose } = useTelegram();

  const tg = window.Telegram.WebApp;
  console.log(tg.initDataUnsafe.user?.username);

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className='username'>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
