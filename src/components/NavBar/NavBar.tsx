import React from 'react';

import styles from './NavBar.module.css';

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <nav className={styles.menu}>
      NavBar
    </nav>
  );
}

export default NavBar;