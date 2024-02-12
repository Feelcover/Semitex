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
        <BenefitItem
          backgroundImage="/images/benefitQuality.svg"
          title="Качественная продукция"
          description="Все наши товары сертифицированы и имеют сопроводительную документацию."
        />
         <BenefitItem
          backgroundImage="/images/benefitIndividual.svg"
          title="Индивидуальный подход"
          description="Возможность изготовления компонентов специально для вас
          на заводах-изготовителя."
        />
         <BenefitItem
          backgroundImage="/images/benefitDelivery.svg"
          title="Бесплатная доставка"
          description="При наличии товара на складе и заказе от 10 000 рублей,
          доставим бесплатно по Москве и СПБ в течение 2х часов."
        />
         <BenefitItem
          backgroundImage="/images/benefitAnalogue.svg"
          title="Подбираем аналоги"
          description="Поможем подобрать аналоги популярных европейских брендов
          в условиях санкций."
        />
         <BenefitItem
          backgroundImage="/images/benefitReserve.svg"
          title="Резервный запас компонентов"
          description="Хранение товара на наших складах для постоянных клиентов."
        />
         <BenefitItem
          backgroundImage="/images/benefitFlex.svg"
          title="Гибкая система оплаты"
          description="Отсрочка платежей для постоянных клиентов."
        />
        
      </div>
    </section>
  );
};

export default HowBenefit;
