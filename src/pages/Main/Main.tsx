import classes from "./Main.module.css";
import { CardList, Hero } from "../../features";
import {
  About,
  ConditionerSelection,
  Contacts,
  Delivery,
  Documentation,
  ExamplesOfOurWork,
  Footer,
  LearnMore,
  OurTeam,
  Payment
} from "../../widgets";

export const Main = () => {
  return (
    <section className={classes.container}>
      <Hero />
      <CardList />
      <ExamplesOfOurWork />
      <Delivery />
      <Payment />
      <Documentation />
      <About />
      <LearnMore />
      <Contacts />
      <OurTeam />
      <ConditionerSelection />
      <Footer />
    </section>
  );
};
