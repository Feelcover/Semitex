import React, { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
  type: "submit" | "reset" | "button";
  text: string;
  marginBottom?: number;
  marginTop?: number;
}

const Button: FC<IButton> = ({ type, text, marginBottom, marginTop }) => {
  return (
    <button
      className={styles.button}
      style={{ marginBottom, marginTop }}
      type={type}
    >
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default Button;
