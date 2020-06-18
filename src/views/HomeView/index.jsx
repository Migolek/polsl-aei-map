import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

import PolslLogo from '../../assets/polsl-logo.png';

import * as styles from './styles.module.scss';

class HomeView extends React.Component {
  render() {
    return (
      <Link className={styles.linkWrapper} to="/map">
        <section className={styles.homeViewSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.logoWrapper}>
              <Spring config={{ duration: 1000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => <img style={props} src={PolslLogo} alt="polsl-logo" />}
              </Spring>
            </div>
            <Spring config={{ duration: 1000, delay: 1500 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props => (
                <p style={props} className={styles.description}>
                  {'Interaktywna mapa wydziału Automatyki, Elektroniki i Informatyki'}
                </p>
              )}
            </Spring>
          </div>
          <Spring config={{ duration: 1000, delay: 1500 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {props => (
              <div className={styles.descriptionFooter}>
                <span style={props} className={styles.subject}>
                  {'Systemy Interaktywne i Multimedialne, Informatyka st II, sem. I'}
                </span>
                <div style={props} className={styles.authors}>
                  <ul>
                    <li>{'Bąk Szymon'}</li>
                    <li>{'Dziedzic Bolesław'}</li>
                    <li>{'Kościelniak Łukasz'}</li>
                    <li>{'Niemczyk Piotr'}</li>
                  </ul>
                </div>
              </div>
            )}
          </Spring>
        </section>
      </Link>
    );
  }
}

export default HomeView;
