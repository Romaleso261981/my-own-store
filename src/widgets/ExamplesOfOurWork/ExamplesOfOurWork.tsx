import s from "./ExamplesOfOurWork.module.css";

export default function ExamplesOfOurWork() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.examplesWork}>
          <h2>Приклади наших робіт</h2>
          <p>Укомплектуємо об'єкти від Квартири до величезної Мережі Готель</p>
          <div className={s.examples1}>
            <img src="examplesOfOurWork/bl6_p1.jpg" alt="img" />
            <div className={s.examplesDescription_bock1}>
              <h3>Мережа Готель Рейкарц</h3>
              <p>Укомплектували 7 готелів у 2021 році по Україні. Поставили:</p>
              <span>Спліт-системи Cooper&Hunter</span>
              <div className={s.examplesDescription_bock2}>
                <h4>В результаті</h4>
                <p>
                  <span>Зменшили суму кошторису на 5% </span>за рахунок підбору
                  оптимальних комплектуючих
                </p>
              </div>
              <button>Прорахувати кошторис для Вашого проекту</button>
            </div>
          </div>
          <div className={s.line}></div>
          <div className={s.examples1}>
            <img src="examplesOfOurWork/bl6_p2.jpg" alt="img" />
            <div className={s.examplesDescription_bock1}>
              <h3>Котедж 450 кв. м. (Львів)</h3>
              <p>Укомплектували 7 готелів у 2021 році по Україні. Поставили:</p>
              <span>Спліт-системи Cooper&Hunter</span>
              <div className={s.examplesDescription_bock2}>
                <h4>В результаті</h4>
                <p>
                  <span>Зменшили суму кошторису на 5% </span>за рахунок підбору
                  оптимальних комплектуючих
                </p>
              </div>
              <button>Прорахувати кошторис для Вашого проекту</button>
            </div>
          </div>
          <div className={s.line}></div>
        </div>
      </div>
    </div>
  );
}
