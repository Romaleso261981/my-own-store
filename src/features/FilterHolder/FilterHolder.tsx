import s from "./FilterHolder.module.css";

const FilterHolder = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.mainTilte}>Виробники:</h3>
      <input className={s.input} type="text" />
    </div>
  );
};

export default FilterHolder;
