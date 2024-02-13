import React from "react";
import { FC } from "react";
import styles from "./BenefitItem.module.scss";

interface IBenefitItemProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const BenefitItem: FC<IBenefitItemProps> = ({
  backgroundImage,
  title,
  description,
}) => {
  return (
    <li className={styles.benefitItem}>
      <div
        className={styles.benefitItem__image}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <h4 className={styles.benefitItem__title}>{title}</h4>
      <p className={styles.benefitItem__description}>{description}</p>
    </li>
  );
};

export default BenefitItem;
