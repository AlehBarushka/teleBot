import React from 'react';
import { useTelegram } from '../hooks/useTelegram';
import Button from './Button';

const Header = () => {
  const { onClose } = useTelegram();

  const tg = window.Telegram.WebApp;

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span>{tg.initDataUnsafe?.user?.userName}</span>
    </div>
  );
};

export default Header;
