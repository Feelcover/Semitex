"use client";


import React from "react";
import Button from "../Button/Button";
import styles from "./Form.module.scss";

const Form = () => {

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Закажите</p>
        <p className={styles.title}>Обратный звонок</p>
      </div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Ваше имя*</p>
          <input
            className={styles.input}
            type="text"
            placeholder="Петров Петр"
          />
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Ваш номер*</p>
          <input
            className={styles.input}
            type="tel"
            placeholder="+7 (_ _ _) _ _ _-_ _-_ _"
          />
        </div>
        <Button
          type="submit"
          text="Заказать звонок"
          marginTop={34}
          marginBottom={17}
        />
      </form>
      <div className={styles.confidentiality}>
        <div className={styles.confidentiality__img}/>
        <p className={styles.confidentiality__text}>Мы гарантируем конфиденциальность данных</p>
      </div>
    </div>
  );
};

export default Form;
