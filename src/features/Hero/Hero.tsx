import s from "./Hero.module.css";
import { HeaderSearch } from "../Header/Header";

export default function Hero() {
  return (
    <section className={s.heroWrapper}>
      <HeaderSearch />
      <div className={s.container}>
        <div className={s.heroWraper}>
          <div className={s.firstBlock}>
            <h1 className={s.heroTitle}>
              Кондиціонери від офіційного представника
            </h1>
            <h2 className={s.heroSubtitle}>Зі знижками від 7 %</h2>
          </div>
          <div className={s.secondBlock}>
            <p className={s.heroText}>
              Перше сервісне обслуговування - Безкоштовно
            </p>
            <p className={s.heroText}>
              Спеціальні умови купівлі від 2-х кондиціонерів
            </p>
            <a className={s.secondBlockLink}>Залишити заявку</a>
          </div>
          <div className={s.thirdBlock}>
            <ul>
              <li className={s.thirdBlockLink}>
                <img src="/hero/ti_01.svg" alt="img" />
                <p>Даємо ціну нижче – ми прямий</p>
                <p>постачальник</p>
              </li>
              <li className={s.thirdBlockLink}>
                <img src="/hero/ti_02.svg" alt="img" />
                <p>Оперативний монтаж власними</p>
                <p>бригадами</p>
              </li>
              <li className={s.thirdBlockLink}>
                <img src="/hero/ti_03.svg" alt="img" />
                <p>Кондиціонери В наявності</p>
              </li>
              <li className={s.thirdBlockLink}>
                <img src="/hero/ti_04.svg" alt="img" />
                <p>Безкоштовна доставка службою</p>
                <p>компанії</p>
              </li>
            </ul>
          </div>
          <button className={s.heroButton}>Підібрати кондиціонери</button>
        </div>
      </div>
    </section>
  );
}
