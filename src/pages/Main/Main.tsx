import classes from "./Main.module.css";
import { CardList, Hero } from "../../features";
import {
  About,
  ConditionerSelection,
  Contacts,
  Delivery,
  ExamplesOfOurWork,
  Footer,
  LearnMore,
  Payment
} from "../../widgets";
import { BackToTop } from "../../features/BackToTop/BackToTop";

import { conditioners } from "./mockData";

export const Main = () => {
  return (
    <section className={classes.container}>
      <Hero />
      <CardList data={conditioners} type="main" />
      <ExamplesOfOurWork />
      <Delivery />
      <Payment />
      {/* <Documentation /> */}
      <About />
      <LearnMore />
      <Contacts />
      {/* <OurTeam /> */}
      <ConditionerSelection />
      <Footer />
      <BackToTop />
    </section>
  );
};
