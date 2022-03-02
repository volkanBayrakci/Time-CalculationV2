import { useState } from "react";

export default function TargetCalc() {
  const [employee, setEmployee] = useState();
  const [target, setTarget] = useState();
  const [resultThree, setResultThree] = useState();
  const [resultFour, setResultFour] = useState();

  const handleClick = () => {
    const employeeVariable = employee;
    const targetVariable = target;
    const combining = targetVariable / 60 / employeeVariable / 7.25;
    const calculation = combining * 435;
    setResultThree(combining);
    setResultFour(calculation.toFixed(0));
  };

  // const handleReset = (e) => {
  //   e.preventDefault();
  //   setEmployee("");
  //   setTarget("");
  // };

  return (
    <>
      <form className="form">
        <div className="form-content">
          <label htmlFor="employee">Personel :</label>
          <input
            id="employee"
            type="number"
            placeholder="Personel Sayısını Giriniz"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            onKeyUp={handleClick}
            className="form-input"
          />
        </div>
        <div className="form-content">
          <label htmlFor="target">Hedef :</label>
          <input
            id="target"
            type="number"
            placeholder="Hedefi Giriniz"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            onKeyUp={handleClick}
            className="form-input"
          />
        </div>
      </form>
      <div className="result-container">
        <div className="result-content">
          <label>Dakika Hedefi: </label>
          <input type="number" value={resultThree} className="form-input" />
        </div>
        <div className="result-content">
          <label>Gün Sonu Hedefi: </label>
          <input type="number" value={resultFour} className="form-input" />
        </div>
      </div>
    </>
  );
}
