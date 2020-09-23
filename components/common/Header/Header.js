import React from 'react';
import Link from 'next/link';
import Menu from '../Menu';
import LogoImage from '../images/logo.svg';
import classes from './style.module.scss';

const Header = () => (
  <div className={classes.header}>
    <div className={classes.logo}>
      <Link href="/">
        <a><LogoImage /></a>
      </Link>
    </div>
    <Menu />
  </div>
);

export default Header;
