import s from "./FilterHolder.module.css";

export const FilterHolder = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.mainTilte}>Виробники:</h3>
      <input className={s.input} type="text" />
    </div>
  );
};
