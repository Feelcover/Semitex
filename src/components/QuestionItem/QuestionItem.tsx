import { motion } from "framer-motion";
import React, { useState } from "react";
import { FC } from "react";
import styles from "./QuestionItem.module.scss";

interface IQuestionItem {
  title: string;
  backgroundImage?: string;
  active?: boolean;
  answerStart?: string;
  answerMiddle?: string;
  answerEnd?: string;
  onClick?:()=> void
}

const QuestionItem: FC<IQuestionItem> = ({
  title,
  backgroundImage,
  answerStart,
  answerMiddle,
  answerEnd
}) => {
  const [active, setActive] = useState(false)

  return (
    <li className={styles.wrapper}>
      <div
        className={`${styles.questionItem} ${
          active && styles.questionItemActive
        }`}
      >
        <p className={styles.questionItem__title}>{title}</p>
        <div
          className={`${styles.questionItem__slider} slider ${
            active && styles.sliderActive
          }`}
          style={{ backgroundImage }}
          onClick={() => setActive(!active)}
        />
      </div>
      {active && (
       <motion.div
       transition={{
         ease: "linear",
       }}
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
     > <div className={styles.modal}>
          <span className={styles.modal__text}>{answerStart}</span>
          <span className={styles.modal__text}>{answerMiddle}</span>
          <span className={styles.modal__text}>{answerEnd}</span>
        </div></motion.div>
      )}
    </li>
  );
};

export default QuestionItem;
