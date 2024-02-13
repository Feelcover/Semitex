import React from "react";
import Button from "../Button/Button";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.footer__logo} />
      <nav></nav>
      <Button
        type="button"
        text="ОСТАВИТЬ ЗАЯВКУ"
        backgroundColor="rgb(150, 154, 247)"
      />
      </div>
    </footer>
  );
};

export default Footer;
