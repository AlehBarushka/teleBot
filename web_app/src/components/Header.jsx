import React from 'react';
import { tg } from '../tgConfig';
import Button from './Button';

const Header = () => {
  const onClose = () => {
    console.log('close');
    tg.close();
  };

  const userName = tg.initDataUnsafe?.user?.username;

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span>{userName}</span>
    </div>
  );
};

export default Header;
