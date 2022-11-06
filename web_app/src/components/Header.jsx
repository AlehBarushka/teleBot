import React from 'react';
import { useTelegram } from '../hooks/useTelegram';
import Button from './Button';

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span>{user?.userName}</span>
    </div>
  );
};

export default Header;
