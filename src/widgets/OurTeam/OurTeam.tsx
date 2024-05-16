import s from "./OurTeam.module.css";

export default function OurTeam() {
  return (
    <>
      <section className={s.wrapper}>
        <div className={s.container}>
          <h2>Є питання? Ми готові допомогти!</h2>
          <div className={s.cardList}>
            <div className={s.card}>
              <div className={s.imgBlock}>
                <img src="ourTeam/bl5_p2.jpg" alt="img" />
                <h3>Вадим</h3>
                <p>провідний менеджер відділу продаж</p>
              </div>
              <div className={s.descriptionBlock1}>
                <h4>Важко Підібрати відповідні кондиціонери?</h4>
                <p>
                  Вадим допоможе Вам підібрати кондиціонери під ваше приміщення.
                  Підкаже як визначиться з потужністю та виробником.
                </p>
                <p>
                  Проконсультує щодо встановлення та сервісного обслуговування.
                </p>
                <button className={s.ourTeam_button}>Кондиціонери</button>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.imgBlock}>
                <img src="ourTeam/bl5_p3.jpg" alt="img" />
                <h3>Вадим</h3>
                <p>провідний менеджер відділу продаж</p>
              </div>
              <div className={s.descriptionBlock2}>
                <h4>Залишилися питання доставки та оплати?</h4>
                <p>
                  Олег проконсультує вас з Логістики та Оплати та інших питань.
                </p>
                <p></p>
                <button className={s.ourTeam_button}>Кондиціонери</button>
              </div>
            </div>
            <div className={s.card}>
              <div className={s.imgBlock}>
                <img src="ourTeam/bl5_p4.jpg" alt="img" />
                <h3>Вадим</h3>
                <p>провідний менеджер відділу продаж</p>
              </div>
              <div className={s.descriptionBlock3}>
                <h4>Цікавить велике замовлення?</h4>
                <p>Дмитро складе вам спец. пропозиції щодо цін та умов</p>
                <p>Надасть особливі умови для великих об'єктів</p>
              </div>
              <button className={s.ourTeam_button}>Кондиціонери</button>
            </div>
            <div className={s.card}>
              <div className={s.imgBlock}>
                <img src="ourTeam/bl5_p5.jpg" alt="img" />
                <h3>Вадим</h3>
                <p>провідний менеджер відділу продаж</p>
              </div>
              <div className={s.descriptionBlock4}>
                <h4>Цікавлять держзакупівлі?</h4>
                <p>Тетяна Підкаже по нюансах роботи з Держзакупівлями</p>
                <p>
                  Має 9-річний досвід у цій сфері підкаже найкраще рішення під
                  вашу ситуацію.
                </p>
                <button className={s.ourTeam_button}>Кондиціонери</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={s.line}></div>
    </>
  );
}
