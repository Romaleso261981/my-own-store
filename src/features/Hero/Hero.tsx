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
          <button className={s.heroButton}>
            Підібрати кондиціонери у 3 кліки
          </button>
        </div>
      </div>
    </section>
  );
}
