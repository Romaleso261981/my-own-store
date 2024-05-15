import { useState } from "react";
import s from "./ConditionerSelection.module.css";

export default function ConditionerSelection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    CeilingHeight: "",
    NumberOfPeople: "",
    AirAonditionerBrand: "",
    roomArea: "",
    NumberOfWindows: "",
    PhoneNumber: ""
  });

  const clearForm = () => {
    console.log("clearForm");
    setFormData({
      CeilingHeight: "",
      NumberOfPeople: "",
      AirAonditionerBrand: "",
      roomArea: "",
      NumberOfWindows: "",
      PhoneNumber: ""
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const setStepChanger = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(1);
      handleSubmit();
      clearForm();
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.block1}></div>
        <h2>
          Підберіть кондиціонери в 3 кліки та отримайте відповідні варіанти{" "}
          <br /> на email:
        </h2>
        <h4>Крок 1 із 3:</h4>
        <form action="submit">
          <label htmlFor="">
            {step === 1
              ? "Висота стелі:"
              : step === 2
              ? "Кількість людей:"
              : "Марка кондиціонера:"}
          </label>
          {step === 1 ? (
            <input
              type="text"
              name="CeilingHeight"
              onChange={(e) => handleChange(e)}
            />
          ) : step === 2 ? (
            <input
              type="text"
              name="NumberOfPeople"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              type="text"
              name="AirAonditionerBrand"
              onChange={(e) => handleChange(e)}
            />
          )}
          <label htmlFor="">
            {step === 1
              ? "Площа приміщення:"
              : step === 2
              ? "Кількість вікон"
              : "Ваш номер телефону:"}
          </label>
          {step === 1 ? (
            <input
              type="text"
              name="roomArea"
              onChange={(e) => handleChange(e)}
            />
          ) : step === 2 ? (
            <input
              type="text"
              name="NumberOfWindows"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              type="text"
              name="PhoneNumber"
              onChange={(e) => handleChange(e)}
            />
          )}
          <button onClick={() => setStepChanger()} type="button">
            {step === 1
              ? "перейти до кроку №2"
              : step === 2
              ? "перейти до кроку №3"
              : "Зробити замовлення"}
          </button>
        </form>
      </div>
    </div>
  );
}
