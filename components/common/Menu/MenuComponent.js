import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import MenuImage from '../images/icons/menu.svg';
import classes from './style.module.scss';

const MenuComponent = ({ isOpen, setIsOpen }) => (
  <div className={classes.menu}>
    <button type="button" onClick={() => setIsOpen(!isOpen)} className={isOpen ? classes.isOpen : null}>
      <MenuImage />
    </button>
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
      <div className={classes.menuContent}>
        <ul>
          <li>
            <Link href="/services/brand-concept">
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
            </a>
          </li>
          <li className={classes.isHighlighted}>
            <button type="button">Fale com a gente</button>
          </li>
        </ul>
      </div>
    </CSSTransition>
  </div>
);

MenuComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuComponent;
