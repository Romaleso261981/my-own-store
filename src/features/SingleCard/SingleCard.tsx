import React from "react";

import s from "./SingleCard.module.css";
import { Card } from "../../shared/types/Types";
// import { useTranslation } from "react-i18next";

type SingleCardProps = {
  card: Card;
};

const openOrderForm = (path: string) => {
  window.open(path, "_blank");
};

export const SingleCard: React.FC<SingleCardProps> = ({ card }) => {
  // const { t } = useTranslation();
  return (
    <div className={s.cardWrapper}>
      <h2>{card.title}</h2>
      <img src={card.image} />
      <p>{card.price}</p>
      <p>{card.description}</p>
      <div className={s.buttonWrapper}>
        <button className={s.cardButtonDetail}>
          {/* {t("header.admin")} */}
          Деталі
        </button>
        <button
          onClick={() => openOrderForm(card.path)}
          className={s.cardButtonCost}
        >
          {/* {t("header.admin")} */} Замовити
        </button>
      </div>
    </div>
  );
};
