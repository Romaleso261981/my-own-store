import { CardList, Hero } from "../../features";
import { About, Contacts, Delivery, Footer } from "../../widgets";
import classes from "./CooperHunter.module.css";

export const CooperHunter = () => {
  return (
    <section className={classes.container}>
      <Hero />
      <CardList />
      <Delivery />
      <About />
      <Contacts />
      <Footer />
    </section>
  );
};
