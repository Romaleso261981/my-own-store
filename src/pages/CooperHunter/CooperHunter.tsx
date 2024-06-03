import { CardList, Hero } from "../../features";
import { BackToTop } from "../../features/BackToTop/BackToTop";
import { About, Contacts, Delivery, Footer } from "../../widgets";
import classes from "./CooperHunter.module.css";

import { conditioners } from "./mockData";

export const CooperHunter = () => {
  return (
    <section className={classes.container}>
      <Hero />
      <CardList data={conditioners} />
      <Delivery />
      <About />
      <Contacts />
      <Footer />
      <BackToTop />
    </section>
  );
};
