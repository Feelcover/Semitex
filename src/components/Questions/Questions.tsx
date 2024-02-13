import React from "react";
import QuestionItem from "../QuestionItem/QuestionItem";
import styles from "./Questions.module.scss";

const Questions = () => {
  return (
    <section className={styles.questions}>
      <div className="wave waveOne" />
      <h3 className={styles.questions__title}>
        Ответы на самые популярные вопросы в сфере
      </h3>
      <ul className={styles.questions__items}>
        <QuestionItem title="Lorem ipsum dolor sit amet consectetur. Ultrices aliquam." />
        <QuestionItem title="Lorem ipsum dolor sit amet consectetur. Ultrices aliquam." />
        <QuestionItem title="Lorem ipsum dolor sit amet consectetur. Ultrices aliquam." />
        <QuestionItem title="Lorem ipsum dolor sit amet consectetur. Ultrices aliquam." />
        <QuestionItem title="Lorem ipsum dolor sit amet consectetur. Ultrices aliquam." />
      </ul>
    </section>
  );
};

export default Questions;
