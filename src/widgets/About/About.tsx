import s from "./About.module.css";
export const About = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.box}>
          <h2>Наша компанія у цифрах</h2>
          <ul className={s.list1}>
            <li className={s.coll1}>
              <img src="about/bl12_i1.svg" alt="img" />
              <h3>2 000 позицій</h3>
              <p>
                наш асортимент, завдяки цьому ми закриваємо будь-які потреби
                щодо облаштування клімату
              </p>
            </li>
            <li className={s.coll2}>
              <img src="about/bl12_i2.svg" alt="img" />
              <h3>50 000 кв.м</h3>
              <p>
                загальна площа об'єктів, які ми укомплектували кондиціонерами за
                останній рік
              </p>
            </li>
            <li className={s.coll3}>
              <img src="about/bl12_i3.svg" alt="img" />
              <h3>3000 клієнтів</h3>
              <p>Приватні особи, компанії та державні об'єкти</p>
            </li>
          </ul>
          <ul className={s.list2}>
            <li className={s.coll1}>
              <img src="about/bl12_i1.svg" alt="img" />
              <h3>2 000 позицій</h3>
              <p>
                наш асортимент, завдяки цьому ми закриваємо будь-які потреби
                щодо облаштування клімату
              </p>
            </li>
            <li className={s.coll2}>
              <img src="about/bl12_i2.svg" alt="img" />
              <h3>50 000 кв.м</h3>
              <p>
                загальна площа об'єктів, які ми укомплектували кондиціонерами за
                останній рік
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
