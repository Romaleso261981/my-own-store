import { CardList, Hero } from "../../features";
import { About, Contacts, Delivery, Footer } from "../../widgets";
import classes from "./Idea.module.css";

export const Idea = () => {
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
