import React from 'react';
import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCarousel from '../components/ProductCarousel';
import Faq from '../components/Faq';
import HandClickImage from '../components/common/images/icons/hand-click.svg';
import classes from '../styles/pages/index.module.scss';

const Home = () => (
  <div className={classes.home}>
    <Head>
      <title>Ctrl+Brand</title>
    </Head>
    <Header />
    <div className={classes.intro}>
      <p className={classes.gradient}>Design de</p>
      <p className={classes.gradient}>qualidade</p>
      <p className={classes.gradient}>para qualquer</p>
      <p className={classes.gradient}>companhia</p>
      <p className={classes.gradient}>do mundo.</p>
      <p className={classes.normal}>
        Somos um estúdio de design que oferece
        <br />
        alta qualidade, com design no centro e
        <br />
        feito para ser acessível para companhias,
        <br />
        MEI&apos;s e profissionais liberais.
      </p>
      <button type="button" className={classes.manifest}>
        Our Manifest
        <HandClickImage />
      </button>
    </div>
    <div className={classes.carouselWrapper}>
      <ProductCarousel />
    </div>
    <Faq />
    <Footer />
  </div>
);

export default Home;
