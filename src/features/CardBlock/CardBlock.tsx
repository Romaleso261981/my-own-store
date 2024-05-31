import React from "react";
import { conditioners } from "./mockData";

import s from "./CardBlock.module.css";
import { SingleCard } from "..";

export const CardList: React.FC = () => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.cardMainTitle}>
        Виберіть відповідні кондиціонери за параметрами із 1600 моделей
      </h2>
      {/* <FilterHolder /> */}
      <section className={s.cardsWrapper}>
        {conditioners.map((card, index) => (
          <div key={index}>
            <SingleCard card={card} />
          </div>
        ))}
      </section>
    </section>
  );
};
