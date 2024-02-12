import React from "react";
import styles from "./BenefitItem.module.scss";

const BenefitItem = () => {
  return (
    <div className={styles.benefitItem}>
      <div className={styles.benefitItem__image} />
      <h4 className={styles.benefitItem__title}>Качественная продукция</h4>
      <p className={styles.benefitItem__decsription}>
        Все наши товары сертифицированы и имеют сопроводительную документацию.
      </p>
    </div>
  );
};

export default BenefitItem;
