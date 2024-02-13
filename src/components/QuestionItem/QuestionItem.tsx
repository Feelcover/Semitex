import React from 'react'
import { FC } from 'react'
import styles from './QuestionItem.module.scss'

interface IQuestionItem{
    title:string;
    backgroundImage?:string;
}

const QuestionItem:FC<IQuestionItem> = ({title, backgroundImage}) => {
  return (
    <li className={styles.questionItem}>
        <p className={styles.questionItem__title}>{title}</p>
        <div className={`${styles.questionItem__slider} slider`}/>
    </li>
  )
}

export default QuestionItem