import React from 'react';
import Link from 'next/link';
import LogoDarkImage from '../images/logo-dark.svg';
import ArrowRightImage from '../images/icons/arrow-right.svg';
import BehanceImage from '../images/icons/behance.svg';
import InstagramImage from '../images/icons/instagram.svg';
import FacebookImage from '../images/icons/facebook.svg';
import classes from './style.module.scss';

const Footer = () => (
  <footer className={classes.footer}>
    <LogoDarkImage />
    <p className={classes.slogan}>highlight your brand</p>
    <p>
      Comece o seu próximo projeto de
      <br />
      design. Acessível e sem burocrácias.
    </p>
    <div className={classes.flex}>
      <ul>
        <li>
          <Link href="/services">
            <a>Serviços</a>
          </Link>
        </li>
        <li>
          <Link href="/jobs">
            <a>Trabalhos</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <a href="https://app.ctrlbrand.com.br" target="_blank" rel="noreferrer">
            Login
            <ArrowRightImage />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://behance.com" target="_blank" rel="noreferrer"><BehanceImage /></a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><InstagramImage /></a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FacebookImage /></a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
