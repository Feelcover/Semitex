import { motion } from "framer-motion";
import React from "react";
import ManufacturersItem from "../ManufacturersItem/ManufacturersItem";
import styles from "./OurManufacturers.module.scss";

const OurManufacturers = () => {
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
    
    <section className={styles.ourManufacturers} id='manufacturers'>
      <div className="wave waveOne" />
      <div className={styles.container}>
        <h3 className={styles.title}>Наши производители</h3>
        <div className={styles.itemsContainer}>
          <div className={`${styles.sliderLeft} slider`} />
          <ul className={styles.items}>
            <ManufacturersItem backgroundImage="/images/eaier.png" />
            <ManufacturersItem backgroundImage="/images/foryard.png" />
            <ManufacturersItem backgroundImage="/images/fujicon.png" />
            <ManufacturersItem backgroundImage="/images/js.png" />
            <ManufacturersItem backgroundImage="/images/marquis.png" />
          </ul>
          <div className={`${styles.sliderRight} slider`} />
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod felis id quisque nunc. Non orci lacus elit mauris velit gravida imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna gravida consequat et euismod aenean quis mauris. Ut etiam egestas ultrices faucibus ultrices nisl enim consequat faucibus. Nibh id leo ullamcorper eleifend. Id at commodo interdum et leo. </p>
      </div>
      <div className="wave waveTwo" />
    </section>
    </motion.div>
  );
};

export default OurManufacturers;
