import "./App.css";
import CardList from "./features/CardBlock/CardBlock";
import Hero from "./features/Hero/Hero";
import About from "./widgets/About/About";
import ConditionerSelection from "./widgets/ConditionerSelection/ConditionerSelection";
import Contacts from "./widgets/Contacts/Contacts";
import Delivery from "./widgets/Delivery/Delivery";
import Documentation from "./widgets/Documentation/Documentation";
import ExamplesOfOurWork from "./widgets/ExamplesOfOurWork/ExamplesOfOurWork";
import LearnMore from "./widgets/LearnMore/LearnMore";
import Payment from "./widgets/Payment/Payment";

function App() {
  return (
    <>
      <Hero />
      <CardList />
      <ExamplesOfOurWork />
      <Delivery />
      <Payment />
      <Documentation />
      <About />
      <LearnMore />
      <Contacts />
      <ConditionerSelection />
    </>
  );
}

export default App;
