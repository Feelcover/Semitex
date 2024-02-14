import { motion } from "framer-motion";
import React from "react";
import Button from "../Button/Button";
import WorkSchemeItem from "../WorkSchemeItem/WorkSchemeItem";
import styles from "./WorkScheme.module.scss";

const WorkScheme = () => {
  return (
    <motion.div
    transition={{
      delay: 0.3,
      ease: "linear",
      duration: 0.5,
    }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
    <section className={styles.workScheme}>
      <h3 className={styles.workScheme__title}>Схема работы</h3>
      <p className={styles.workScheme__description}>
        Lorem ipsum dolor sit amet consectetur. Augue velit in enim sagittis
        imperdiet sit mauris. Vitae sit in fusce massa amet.
      </p>
      <ul className={styles.workScheme__items}>
        <WorkSchemeItem
          num="01"
          title="ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ"
          descr="Отправить запрос вы можете любым удобным для вас способом: например, через форму на сайте. Также вы можете связаться с нами напрямую."
          backgroundImage="/images/workSchemeCardStartUp.svg"
        />
        <WorkSchemeItem
          num="02"
          title="МЫ ПРОВЕРЯЕМ НАЛИЧИЕ ПОЗИЦИЙ"
          descr="Проверяем наличие на складе, 
а также актуальность производства (возможна замена, если необходимо.) Если требуется замена - подбираем аналоги и привозим на заказ.
"
          backgroundImage="/images/workSchemeCardMidUp.png"
        />
        <WorkSchemeItem
          num="03"
          title="ФОРМИРУЕМ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ"
          descr="На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и условия оплаты."
          backgroundImage="/images/workSchemeCardEndUp.png"
        />
        <WorkSchemeItem
          num="06"
          title="ВЫ ПОЛУЧАЕТЕ ТОВАР"
          descr="Поставляем вам товар в надлежащей упаковке в сопровождении оригиналов всех необходимых документов либо вы забираете его самовывозом."
          backgroundImage="/images/workSchemeCardStartDown.png"
          minWidth={411}
        />
        <WorkSchemeItem
          num="05"
          title="МЫ ВЫПОЛНЯЕМ ЗАКАЗ"
          descr="Товар поступает на склад в Москву или Санкт-Петербург, где мы сверяем правильность поставки и начинаем сборку."
          backgroundImage="/images/workSchemeCardMidDown.svg"
          paddingLeft={55}
        />
        <WorkSchemeItem
          num="04"
          title="ПРОВОДИМ ОПЛАТУ"
          descr="Далее, после получения авансового платежа, мы размещаем заказ."
          backgroundImage="/images/workSchemeCardEndDown.png"
          paddingLeft={55}

        />
      </ul>
      <Button type='button' text='Оставить заявку' marginTop={48} marginBottom={120}/>
    </section>
    </motion.div>
  );
};

export default WorkScheme;
