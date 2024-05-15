import s from "./Documentation.module.css";

export default function Documentation() {
  return (
    <div className={s.wrapper}>
      <div className={s.conteiner}>
        <div className={s.documentation}>
          <h2>Документація</h2>
          <ul>
            <li>
              <img src="documentation/d_sm1.jpg" alt="img" />
              <h3>DDU GROUP</h3>
            </li>
            <li>
              <img src="documentation/d_sm2.jpg" alt="img" />
              <h3>Cooper&Hunter</h3>
            </li>
            <li>
              <img src="documentation/d_sm3.jpg" alt="img" />
              <h3>Neoclima, Panasonic, Toshiba, Leberg</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
