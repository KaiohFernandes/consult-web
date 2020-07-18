import Head from 'next/head'

import Header from '../components/Header';
import SlickSlider from '../components/SlickSlider';
import About from '../components/About';
import Partners from '../components/Partners';
import Prices from '../components/Prices';
import Platform from '../components/Platform';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Consult - Crédito Inteligente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SlickSlider />
      <About />
      <Partners />
      <Prices />
      <Platform />
      <Contact />

      <Footer />

      <Whatsapp />
    </>
  );
}
