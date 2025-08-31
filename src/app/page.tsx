import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import HeroNewsletterForm from "../components/HeroNewsletterForm";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroNewsletterForm />
      <Hero />
    </>
  );
}
