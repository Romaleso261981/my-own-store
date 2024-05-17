import s from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <h3>Контакти</h3>
        <ul>
          <li>
            <img src="contacts/bl13_i1.svg" alt="img" />
            <p>м.Ладижин Вінницька обл. вул. Петра Кравчика 12А</p>
          </li>
          <li>
            <img src="contacts/bl13_i2.svg" alt="img" />
            <a href="phone:0689478723">+38 (068) 947 87 23</a>
          </li>
          <li>
            <img src="contacts/bl13_i4.svg" alt="img" />
            <p>Час роботи 09:00 - 18:00 Пн-Cб</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
