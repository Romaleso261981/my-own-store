import { FC, useEffect } from "react";
import s from "./ContactForm.module.css";

type ContactFormProps = {
  setIsShowForm: () => void;
};

export const ContactForm: FC<ContactFormProps> = ({ setIsShowForm }) => {
  useEffect(() => {
    window.gtag("event", "conversion", {
      send_to: "AW-16450465969/Hmm9CPvrpLMZELHhmKQ9"
    });
  }, []);
  return (
    <section className={s.wrapper}>
      <div className={s.formWrapper}>
        <h2>Залиште заявку</h2>
        <form className={s.form}>
          <input type="text" placeholder="Ім'я" />
          <input type="text" placeholder="Телефон" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Повідомлення"></textarea>
          <button onClick={() => setIsShowForm()}>Відправити</button>
        </form>
      </div>
    </section>
  );
};
