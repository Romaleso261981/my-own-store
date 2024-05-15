import s from "./LearnMore.module.css";

export default function LearnMore() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h2>
          Заощаджуйте від 5 до 30% бюджету за рахунок комплексного <br />{" "}
          рішення
        </h2>
        <p>Ми надаємо комплексні послуги з:</p>
        <p>- підбору</p>
        <p>- проектування</p>
        <p>- постачання техніки</p>
        <p>- монтажу</p>
        <p>- сервісного обслуговування</p>
        <p>
          За рахунок цього клієнтам немає необхідності звертатися до кількох
          компаній, що економить кошти та час.
        </p>
        <button>ДІЗНАТИСЬ ДЕТАЛЬНІШЕ</button>
      </div>
    </section>
  );
}
