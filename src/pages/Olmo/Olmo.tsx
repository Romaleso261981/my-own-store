import { CardList, Hero } from "../../features";
import { About, Contacts, Delivery, Footer } from "../../widgets";
import classes from "./Midea.module.css";

import { conditioners } from "./mockData";

export const Olmo = () => {
  return (
    <section className={classes.container}>
      <Hero />
      <CardList data={conditioners} />
      <Delivery />
      <About />
      <Contacts />
      <Footer />
    </section>
  );
};
