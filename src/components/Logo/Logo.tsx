import React from 'react';

import styles from './Logo.module.css';

interface LogoProps {

}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  return (
    <div className={styles.logo}>
      <a href="" className={styles.logo__a}>Brand</a>
    </div>
  );
}

export default Logo;