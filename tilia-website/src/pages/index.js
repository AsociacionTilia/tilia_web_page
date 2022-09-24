import Header from "../components/header/Header";
import LocalActivitiesSection from "../components/section/local_activities/LocalActivitiesSection";
import Navbar from "../components/navbar/Navbar";
import Section from "../components/section/Section";
import EuropeanActivitiesSection from "../components/section/european_activities/EuropeanActivitiesSection";
import WhoSection from "../components/section/who_section/WhoSection";
import ContactSection from "../components/section/contact_section/ContactSection";
import useLenguageContext from "../context/LanguageContext";
import CardsSection from "../components/section/cards_section/CardsSection";

export default function Home() {
  const { language } = useLenguageContext();
  return (
    <>
      <Navbar />
      <Header />
      <Section>
        <CardsSection />
      </Section>
      {/* <Section
        title={language === "ES" ? "Actividades locales" : "Local activities"}>
        <LocalActivitiesSection />
      </Section>
      <Section
        title={
          language === "ES" ? "Actividades europeas" : "European activities"
        }>
        <EuropeanActivitiesSection />
      </Section>
      <Section title={language === "ES" ? "Quienes somos" : "Who we are"}>
        <WhoSection />
      </Section> */}
      <Section title={language === "ES" ? "Contacto" : "Contact"}>
        <ContactSection />
      </Section>
    </>
  );
}
