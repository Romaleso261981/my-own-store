import { Logo } from "..";
import s from "./HeaderSearch.module.css";

export const HeaderSearch = () => {
  const goToMain = () => {
    window.location.href = "/";
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.inner}>
          <div onClick={goToMain} className={s.firstBlock}>
            <Logo />
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
          <div className={s.international}>
            <span>UA</span>
            <span>RU</span>
          </div>
        </div>
      </div>
    </header>
  );
};
