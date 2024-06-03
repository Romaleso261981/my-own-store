import React from "react";

import s from "./CardBlock.module.css";
import { SingleCard } from "..";
import { Conditioner } from "../../shared/types/Types";

type CardListProps = {
  data: Conditioner[];
  type?: string;
};

export const CardList: React.FC<CardListProps> = ({ data, type }) => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.cardMainTitle}>
        Виберіть відповідні кондиціонери за параметрами із 1600 моделей
      </h2>
      {/* <FilterHolder /> */}
      <section className={s.cardsWrapper}>
        {data.map((card, index) => (
          <div key={index}>
            <SingleCard card={card} type={type} />
          </div>
        ))}
      </section>
    </section>
  );
};
