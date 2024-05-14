import s from "./HeaderSearch.module.css";

export function HeaderSearch() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.firstBlock}>
            <img src="/logo.png" />
          </div>
          <div className={s.secondBlock}>
            <h2 className={s.subTitle}>Продаж кондиціонерів.</h2>
            <span>
              <a href="tel:0689478723" className={s.ancorPhone}>
                +38(068) 947 87 23
              </a>
            </span>
          </div>
          <div className={s.international}>
            <span>UA</span>
            <span>RU</span>
          </div>
        </div>
      </div>
    </header>
  );
}
