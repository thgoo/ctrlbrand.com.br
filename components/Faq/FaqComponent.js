import React from 'react';
import FaqPlusImage from '../common/images/icons/faq-plus.svg';
import classes from './style.module.scss';

const FaqComponent = () => (
  <div className={classes.faq}>
    <p className={classes.intro}>
      Nossa missão é melhorar a
      <br />
      experiência do mundo
      <br />
      fazendo design de qualidade
      <br />
      acessível para todas as
      <br />
      pessoas e companhias.
    </p>
    <p className={classes.small}>
      Entendemos o quão difícil pode ser ter um design de
      <br />
      qualidade enquanto você tem milhões de outras
      <br />
      prioridades.
      <br />
    </p>
    <div className={classes.faqContent}>
      <button type="button" className={classes.question}>
        O que é o Ctrl+Brand
        <FaqPlusImage />
      </button>
      <button type="button" className={classes.question}>
        Qual a diferença entre Brand Concept<br />
        e Brand Web?
        <FaqPlusImage />
      </button>
      <button type="button" className={classes.question}>
        Que outras coisas de marketing vocês fazem?
        <FaqPlusImage />
      </button>
      <button type="button" className={classes.question}>
        Por não contratar uma agência?
        <FaqPlusImage />
      </button>
      <button type="button" className={classes.question}>
        Por que não contratar um freelancer?
        <FaqPlusImage />
      </button>
      <button type="button" className={classes.question}>
        Por que não contratar um estagiário?
        <FaqPlusImage />
      </button>
    </div>
  </div>
);

export default FaqComponent;
