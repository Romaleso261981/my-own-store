import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.firstBlock}>
            <img src="/logo.png" />
          </div>
          <div className={s.secondBlock}>
            <p>© 2021 Смарт Клімат</p>
            <p>Продаж Кондиціонерів</p>
          </div>
          <div className={s.thirdBlock}>
            <img src="footer/tel_icon.svg" alt="phone" />
            <a href="tel:0689478723" className={s.ancorPhone}>
              +38(068) 947 87 23
            </a>
          </div>
          <div className={s.schedule}>
            <img src="footer/clock.svg" alt="logo" />
            <div>
              <p>Працюємо</p>
              <p>09:00 – 18:00 Пн.-Пт.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
