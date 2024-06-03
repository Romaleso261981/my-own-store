import React from "react";

import s from "./SingleCard.module.css";
import { Conditioner } from "../../shared/types/Types";
// import { useTranslation } from "react-i18next";

type SingleCardProps = {
  card: Conditioner;
  type?: string;
};

const openOrderForm = (path: string) => {
  window.open(path, "_blank");
};

export const SingleCard: React.FC<SingleCardProps> = ({ card, type }) => {
  // const { t } = useTranslation();
  return (
    <div className={s.cardWrapper}>
      <h2>{card.title}</h2>
      <img src={card.image} />
      <div className={s.descriptionWrapper}>
        <h2>Опис</h2>
        <p>{card.description}</p>
        {type !== "main" && (
          <p className={s.price}>{`${card.price} .00 грн.`}</p>
        )}
        <div className={s.buttonWrapper}>
          <button className={s.cardButtonDetail}>
            {type === "main" ? "Замовити консультацію" : "Детальніше"}
          </button>
          <button
            onClick={() => openOrderForm(card.path)}
            className={s.cardButtonCost}
          >
            {type === "main" ? "Прейти до категорії" : "Додати в корзину"}
          </button>
        </div>
      </div>
    </div>
  );
};
