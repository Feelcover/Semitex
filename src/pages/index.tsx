import Footer from "../components/Footer/Footer";
import HowBenefit from "../components/HowBenefit/HowBenefit";
import MainConnection from "../components/MainConnection/MainConnection";
import OurManufacturers from "../components/OurManufacturers/OurManufacturers";
import Questions from "../components/Questions/Questions";
import WorkScheme from "../components/WorkScheme/WorkScheme";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Semitex</title>
        <meta name="description" content="Оптовые поставки электронных компонентов ИЗ КИТАЯ день в день" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <MainConnection/>
      <HowBenefit/>
      <OurManufacturers/>
      <WorkScheme/>
      <Questions/>
      <Footer/>
    </>
  );
}
