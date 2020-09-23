import React from 'react';
import Head from 'next/head';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ProductCarousel from '../../components/ProductCarousel';
import classes from '../../styles/pages/services.module.scss';

const BrandConcept = () => (
  <div className={classes.brandConcept}>
    <Head>
      <title>Sobre - Ctrl+Brand</title>
    </Head>
    <Header />
    <div className={classes.carouselWrapper}>
      <ProductCarousel />
    </div>
    <section>
      <div className={classes.image} />
    </section>
    <section>
      <div className={classes.image} />
    </section>
    <Footer />
  </div>
);

export default BrandConcept;
