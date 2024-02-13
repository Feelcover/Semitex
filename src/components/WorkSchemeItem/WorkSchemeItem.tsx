import React from "react";
import { FC } from "react";
import styles from "./WorkSchemeItem.module.scss";

interface IWorkSchemeItem {
  num: string;
  title: string;
  descr: string;
  backgroundImage: string;
  minWidth?:number;
  paddingLeft?:number
}

const WorkSchemeItem: FC<IWorkSchemeItem> = ({
  num,
  title,
  descr,
  backgroundImage,
  minWidth,
  paddingLeft
}) => {
  return (
    <li
      className={styles.workSchemeItem}
      style={{ backgroundImage: `url(${backgroundImage})`, minWidth, paddingLeft }}
    >
      <div className={styles.container}>
        <span className={styles.workSchemeItem__number}>{num}</span>
        <div className={styles.workSchemeItem__text}>
          <h4 className={styles.workSchemeItem__text__title}>{title}</h4>
          <p className={styles.workSchemeItem__text__description}>{descr}</p>
        </div>
      </div>
    </li>
  );
};

export default WorkSchemeItem;
