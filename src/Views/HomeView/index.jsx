import React from "react";
import classNames from 'classnames';
import PolslLogo from "../../assets/polsl-logo.png";

import * as styles from "./styles.module.scss";

class HomeView extends React.Component {
  render() {
    return (
      <section className={styles.homeViewSection}>
        <div className={styles.contentWrapper}>
          <div className={classNames(styles.logoWrapper, styles.fullSize)}>
            <img src={PolslLogo} alt="polsl-logo" />
          </div>
          <p className={styles.description}>
            Interaktywna mapa wydziału Automatyki, Elektroniki i Informatyki
          </p>
        </div>
        <div className={styles.descriptionFooter}>
          <span className={styles.subject}>
            Systemy Interaktywne i Multimedialne, Informatyka st II, sem. I
          </span>
          <div className={styles.authors}>
            <ul>
              <li>Bąk Szymon</li>
              <li>Dziedzic Bolesław</li>
              <li>Kościelniak Łukasz</li>
              <li>Niemczyk Piotr</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeView;
