import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import styles from "./MainConnection.module.scss";

const MainConnection = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.mainConnection}>
        <div className={styles.titleContainer}>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 1.5,
              ease: "linear",
            }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className={styles.title}>Оптовые поставки</h2>
            <h3 className={styles.subTitle}>электронных компонентов</h3>
            <h2 className={styles.lowTitle}> из китая день в день</h2>
          </motion.div>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 1.5,
              ease: "linear",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className={styles.description}>
              Комплексные поставки электронных компонентов и оборудования.
              Подберем аналоги популярных брендов из Европы в условиях санкций.
            </p>
          </motion.div>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 1.5,
              ease: "linear",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
          <ul className={styles.checkList}>
            <li className={styles.checkList__item}>
              Отсрочка платежей для постоянных клиентов
            </li>
            <li className={styles.checkList__item}>
              Бесплатная доставка по Москве и СПБ в течение 2х часов
            </li>
            <li className={styles.checkList__item}>
              Квалифицированный персональный менеджер
            </li>
          </ul>
          </motion.div>
        </div>
        <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 1.8,
              ease: "linear",
              duration: 0.5,
            }}
            initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x:0 }}
          >
        <Form />
        </motion.div>
      </section>
      <div className="wave" />
    </div>
  );
};

export default MainConnection;
