import { CardList, Hero } from "../../features";
import { About, Contacts, Delivery, Footer } from "../../widgets";
import classes from "./Midea.module.css";

export const Midea = () => {
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
