import React from 'react';
import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import classes from '../styles/pages/about.module.scss';

const AboutPage = () => (
  <div className={classes.about}>
    <Head>
      <title>Sobre - Ctrl+Brand</title>
    </Head>
    <Header />
    <section>
      <p className={classes.bold}>
        Entendemos o quão difícil pode ser ter
        <br />
        um design de qualidade enquanto você
        <br />
        tem milhões de outras prioridades.
      </p>
      <p>
        Nosso design é feito por Humanos e sempre
        <br />
        exclusivo para sua marca. Nossa solução é
        <br />
        acessível porque usamos a tecnologia para dar
        <br />
        agilidade e reduzir custos.
      </p>
      <button type="button" className="button is-pink">Fale com a gente</button>
      <div className={classes.image} />
    </section>
    <section className="has-gray-background">
      <h2 className={`${classes.title} ${classes.isPink}`}>Incomum!</h2>
      <p style={{ marginBottom: '1rem' }}>
        - Trabalhar com uma agência típica pode ser
        <br />
        oneroso e demorado, te deixando sem a
        <br />
        flexibilidade que você precisa.
      </p>
      <p style={{ marginBottom: '1rem' }}>
        - Usar freelancers ajuda, mas com o tempo gasto
        <br />
        em onboarding, a incerteza e alguém que não é
        <br />
        do seu time, pode ser um risco.
      </p>
      <p style={{ marginBottom: '1rem' }}>
        - Contratar alguém é bom, mas você vai perceber
        <br />
        que precisa de outras skills.
      </p>
      <div className={classes.image} />
    </section>
    <section>
      <h2 className={`${classes.title} ${classes.isGreen}`}>Unicorns are fake!</h2>
      <p>
        O que você precisa é uma solução de design
        <br />
        unicórnio, que não existe, mas na Ctrl+Brand™,
        <br />
        você tem acesso a uma equipe multidisciplinar de
        <br />
        designers seniores para entender a sua companhia e
        <br />
        trabalhar lado a lado.
      </p>
      <button type="button" className="button is-green">Fale com a gente</button>
      <div className={classes.image} />
    </section>
    <hr />
    <section className="has-no-vertical-padding-top">
      <p className={classes.bold}>
        Nossa missão é melhorar a
        <br />
        experiência do mundo fazendo design
        <br />
        de qualidade acessível para todas
        <br />
        as pessoas e companhias.
      </p>
      <p>
        Entendemos o quão difícil pode ser ter um
        <br />
        design de qualidade enquanto você tem milhões
        <br />
        de outras prioridades.
      </p>
      <div className={classes.image} />
    </section>
    <Footer />
  </div>
);

export default AboutPage;
