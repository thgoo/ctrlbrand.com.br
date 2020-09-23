import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import classes from './style.module.scss';
import Link from 'next/link';

const ProductCarousel = () => (
  <div className={classes.productCarousel}>
    <CarouselProvider
      naturalSlideWidth={280}
      naturalSlideHeight={440}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <div className={classes.brandConcept}>
            <h3 className={classes.title}>
              Brand
              <br />
              Concept
            </h3>
            <p className={classes.description}>
              Criaremos em 7 dias 2 opções de logo e um manual
              <br />
              completo para a sua marca. Um processo rápido e
              <br />
              semi-automatizado. Para quem valoriza design e sabe
              <br />
              que uma marca bem feita e autoral faz toda a diferença.
            </p>
            <div className={classes.info}>
              <div className={classes.line}>
                <div className={classes.key}>Entrega:</div>
                <div className={classes.value}>
                  2 logomarcas com manual completo.
                  <br />
                  Veja exemplo acima.
                </div>
              </div>
              <div className={classes.line}>
                <div className={classes.key}>Prazo:</div>
                <div className={classes.value}>
                  5 dias úteis
                </div>
              </div>
              <div className={classes.line}>
                <div className={classes.key}>Preço:</div>
                <div className={classes.value}>
                  <span className={classes.price}>R$ 3.000,00</span>
                  <span className={classes.installments}>parcele em até 6x</span>
                </div>
              </div>
            </div>
            <div className={classes.buttons}>
              <Link href="/services/brand-concept">
                <a className={classes.isColorful}>Saiba mais</a>
              </Link>
              <Link href="/services/brand-concept">
                <a>Veja exemplo</a>
              </Link>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className={classes.brandWeb}>
            <h3 className={classes.title}>
              Brand
              <br />
              Web
            </h3>
            <p className={classes.description}>
              Se além de uma marca, você precisa de um site para
              <br />
              lançar, validar seu negócio, prospectar e adquirir contatos,
              <br />
              montamos este plano. Você contrata tudo que tem no
              <br />
              Brand Concept™ + um site one page com 5 áreas.
            </p>
            <div className={classes.info}>
              <div className={classes.line}>
                <div className={classes.key}>Entrega:</div>
                <div className={classes.value}>
                  Brand Concept + 1 site one page com
                  <br />
                  5 área. Tudo dentro do conceito único
                  <br />
                  criado para a sua marca.
                </div>
              </div>
              <div className={classes.line}>
                <div className={classes.key}>Prazo:</div>
                <div className={classes.value}>
                  15 dias úteis
                </div>
              </div>
              <div className={classes.line}>
                <div className={classes.key}>Preço:</div>
                <div className={classes.value}>
                  <span className={classes.price}>R$ 12.000,00</span>
                  <span className={classes.installments}>parcele em até 6x</span>
                </div>
              </div>
            </div>
            <div className={classes.buttons}>
              <Link href="/services/brand-concept">
                <a className={classes.isColorful}>Saiba mais</a>
              </Link>
              <Link href="/services/brand-concept">
                <a>Veja exemplo</a>
              </Link>
            </div>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  </div>
);

export default ProductCarousel;
