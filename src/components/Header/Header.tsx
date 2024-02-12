import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo} />
      <nav className={styles.header__nav}>
        <Link href="/" className={styles.header__nav__item}>
          Каталог
        </Link>
        <Link href="/" className={styles.header__nav__item}>
          Производители
        </Link>
        <Link href="/" className={styles.header__nav__item}>
          Для кого мы работаем
        </Link>
        <Link href="/" className={styles.header__nav__item}>
          Сертификаты
        </Link>
        <Link href="/" className={styles.header__nav__item}>
          О нас
        </Link>
        <Link href="/" className={styles.header__nav__item}>
          FAQ
        </Link>
        <Link href="/" className={styles.header__nav__item}>
          Контакты
        </Link>
      </nav>
      <a href='tel:+78123135845' className={styles.header__contact}>
        <div className={styles.header__contact__icon}/>
        <p className={styles.header__contact__number}>+7 (812)
        <span className={styles.header__contact__numberBold}>{''} 313-58-45</span>
        </p>
      </a>
    </header>
  );
};

export default Header;
