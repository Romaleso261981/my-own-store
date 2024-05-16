import s from "./Delivery.module.css";

export default function Delivery() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.titles}>Доставка та умови роботи</h2>
          <ul>
            <li className={s.thirdBlockLink}>
              <img src="/delivery/blc7_i1.svg" alt="img" />
              <div>
                <p>Наша служба доставки</p>
                <p>Перевізниками або Самовивіз</p>
              </div>
            </li>
            <li className={s.thirdBlockLink}>
              <img src="/delivery/blc7_i3.svg" alt="img" />
              <div>
                <p>Наша доставка: 1 день по Києву, Україна – від 1 дня</p>
                <p>Нова пошта: По Києву 1 день, 1-3 дні по Україні</p>
              </div>
            </li>
            <li className={s.thirdBlockLink}>
              <img src="/delivery/blc7_i3.svg" alt="img" />
              <div>
                <p>Працюємо офіційно за договором для</p>
                <p>юридичних осіб (за потребою)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
