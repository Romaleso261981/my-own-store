import React from "react";
import { conditioners } from "./mockData";

import s from "./CardBlock.module.css";
import SingleCard from "../SingleCard/SingleCard";
import FilterHolder from "../FilterHolder/FilterHolder";

const CardList: React.FC = () => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.cardMainTitle}>
        Виберіть відповідні кондиціонери за параметрами із 1600 моделей
      </h2>
      <FilterHolder />
      <div className={s.cardsWrapper}>
        {conditioners.map((card, index) => (
          <div key={index}>
            <SingleCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardList;
