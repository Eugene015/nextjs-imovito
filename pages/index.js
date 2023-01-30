import BestOffers from "@/components/BestOffers";
import Main from "@/components/Main";
import MobileApp from "@/components/MobileApp";
import Promo from "@/components/Promo";
import Contacts from "@/components/Contacts";
import Head from "next/head";
import News from "@/components/News";
import Faq from "@/components/Faq";
import OwnerProfile from "@/components/OwnerProfile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imovito - платформа для инвестиций в недвижимость</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <BestOffers />
      <Promo />
      <MobileApp />
      <Contacts />
      <News />
      <Faq />
      <OwnerProfile />
      <Footer />
    </>
  );
}
