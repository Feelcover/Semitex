import React from "react";
import { FC } from "react";
import styles from "./ManufacturersItem.module.scss";

interface IManufacturersItem {
  backgroundImage: string;
}

const ManufacturersItem: FC<IManufacturersItem> = ({ backgroundImage }) => {
  return (
    <li
      className={styles.manufacturersItem}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default ManufacturersItem;
