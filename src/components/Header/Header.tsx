import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      Header
    </header>
  );
}

export default Header;