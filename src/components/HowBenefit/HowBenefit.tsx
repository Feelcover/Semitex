import React from "react";
import BenefitItem from "../BenefitItem/BenefitItem";
import styles from "./HowBenefit.module.scss";

const HowBenefit = () => {
  return (
    <section className={styles.howBenefit}>
      <h4 className={styles.howBenefit__title}>Почему с нами выгодно</h4>
      <p className={styles.howBenefit__description}>
        С 1996 года мы занимаемся оптовыми поставками электронных компонентов от
        ведущих производителей из Европы и Азии для Российских потребителей.{" "}
      </p>
      <div className={styles.howBenefit__items}>
        <BenefitItem/>
        <BenefitItem/>
        <BenefitItem/>
        <BenefitItem/>
        <BenefitItem/>
        <BenefitItem/>
      </div>
    </section>
  );
};

export default HowBenefit;
