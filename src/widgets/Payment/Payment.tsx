import s from "./Payment.module.css";

export const Payment = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.row1}>
          <h2>Оплата</h2>
          <div className={s.ramka}></div>
        </div>
        <div className={s.row2}>
          <div className={s.col1}>
            <div className={s.circle}>
              <img src="payment/blc8_i1.svg" alt="img" />
            </div>
            <div className={s.text}>
              <h3>Оплата при отриманні</h3>
              <span></span>
            </div>
          </div>
          <div className={s.col2}>
            <div className={s.circle}>
              <img src="payment/blc8_i2.svg" alt="img" />
            </div>
            <div className={s.text}>
              <h3>Передплата 100%</h3>
              <span>(економія 2% на послугах пошти)</span>
            </div>
          </div>
          <div className={s.col3}>
            <div className={s.circle}>
              <img src="payment/blc8_i3.svg" alt="img" />
            </div>
            <div className={s.text}>
              <h3>Безготівковий розрахунок</h3>
              <span>(з ПДВ)</span>
            </div>
          </div>
        </div>
        <div className={s.row3}>
          <button>ЗАДАТИ ПИТАННЯ</button>
        </div>
      </div>
    </section>
  );
};
