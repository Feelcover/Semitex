import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

const Header = () => {
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;
  return (
    <header className={styles.header}>
      <motion.div
        className={styles.leftContainer__menu__item}
        transition={{
          delay: 0.5,
          ease: "linear",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.header__logo} />
      </motion.div>
      <nav className={styles.header__nav}>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 0.5,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            className={styles.header__nav__item}
            href="/"
            to="#"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
          >
            Каталог
          </Link>
        </motion.div>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 0.6,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            to="manufacturers"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
            className={styles.header__nav__item}
          >
            Производители
          </Link>
        </motion.div>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 0.7,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            to="#"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
            className={styles.header__nav__item}
          >
            Для кого мы работаем
          </Link>
        </motion.div>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 0.8,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            to="#"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
            className={styles.header__nav__item}
          >
            Сертификаты
          </Link>
        </motion.div>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 0.9,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            to="about"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
            className={styles.header__nav__item}
          >
            О нас
          </Link>
        </motion.div>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 1.0,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            to="faq"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
            className={styles.header__nav__item}
          >
            FAQ
          </Link>
        </motion.div>
        <motion.div
          className={styles.leftContainer__menu__item}
          transition={{
            delay: 1.1,
            ease: "linear",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            to="portfolio"
            spy={spy}
            smooth={smooth}
            offset={offset}
            duration={duration}
            className={styles.header__nav__item}
          >
            Контакты
          </Link>
        </motion.div>
      </nav>
      <motion.div
        className={styles.leftContainer__menu__item}
        transition={{
          delay: 1.4,
          ease: "linear",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <a href="tel:+78123135845" className={styles.header__contact}>
          <div className={styles.header__contact__icon} />
          <p className={styles.header__contact__number}>
            +7 (812)
            <span className={styles.header__contact__numberBold}>
              {""} 313-58-45
            </span>
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
