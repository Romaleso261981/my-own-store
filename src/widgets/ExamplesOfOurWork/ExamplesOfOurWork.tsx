import s from "./ExamplesOfOurWork.module.css";

export const ExamplesOfOurWork = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.examplesWork}>
          <h2>Приклади наших робіт</h2>
          <p>Укомплектуємо об'єкти від Квартири до величезної організації.</p>
          <div className={s.examples1}>
            <img src="examplesOfOurWork/ВКВК.jpg" alt="img" />
            <div className={s.examplesDescription_bock1}>
              <h3>ТОВ «Вінницька птахофабрика", Філія "ВКВК"</h3>
              <p>
                Проведення комплексного технічного обслуговування 2023 році.
                Поставили:
              </p>
              <span>Спліт-системи Cooper&Hunter</span>
              <div className={s.examplesDescription_bock2}>
                {/* <h4>В результаті</h4> */}
                <p>
                  <span>Зменшили суму кошторису на 7% </span>вчасного проведення
                  технічного обслуговування, що дало можливість виявити проблеми
                  на ранніх стадіях.
                </p>
              </div>
              <button>Прорахувати кошторис для Вашого проекту</button>
            </div>
          </div>
          <div className={s.line}></div>
          <div className={s.examples1}>
            <img src="examplesOfOurWork/Avangard-Nemirov.jpg" alt="img" />
            <div className={s.examplesDescription_bock1}>
              <h3>Санаторий «Авангард» (Немирів)</h3>
              <p>Укомплектували 3 комплекса у 2024 році. Поставили:</p>
              <span>Спліт-системи Cooper&Hunter</span>
              <div className={s.examplesDescription_bock2}>
                {/* <h4>В результаті</h4> */}
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
};
