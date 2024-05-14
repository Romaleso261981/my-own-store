import React from "react";

import s from "./SingleCard.module.css";

type Card = {
  title: string;
  image: string;
  description: string;
  price: number;
  amount: number;
};

type SingleCardProps = {
  card: Card;
};

const SingleCard: React.FC<SingleCardProps> = ({ card }) => {
  return (
    <div className={s.cardWrapper}>
      <h2>{card.title}</h2>
      <img src={card.image} />
      <p>{card.price}</p>
      <p>{card.description}</p>
      <div className={s.buttonWrapper}>
        <button className={s.cardButtonDetail}>Детальніше</button>
        <button className={s.cardButtonCost}>Дізнатись ціну</button>
      </div>
    </div>
  );
};

export default SingleCard;
