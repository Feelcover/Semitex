import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import styles from "./mainConnection.module.scss";

const MainConnection = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.mainConnection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Оптовые поставки</h2>
          <h3 className={styles.subTitle}>электронных компонентов</h3>
          <h2 className={styles.lowTitle}> из китая день в день</h2>
          <p className={styles.description}>
            Комплексные поставки электронных компонентов и оборудования.
            Подберем аналоги популярных брендов из Европы в условиях санкций.
          </p>
        </div>
        <Form />
      </section>
      <div className={styles.wave}/>
    </div>
  );
};

export default MainConnection;
