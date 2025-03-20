'use client';

import Projetos from "./component/Projetos";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import TextoAnimado from "./component/TextoAnimado";
import Sobre from "./component/Sobre";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <TextoAnimado></TextoAnimado>
      <Sobre></Sobre>
      <Projetos></Projetos>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  );
}
