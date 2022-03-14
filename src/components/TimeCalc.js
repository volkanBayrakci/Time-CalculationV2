import { useState } from "react";

export default function TimeCalc() {
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [pause, setPause] = useState(null);
  const [shift, setShift] = useState();
  const [result, setResult] = useState();
  const [resultTwo, setResultTwo] = useState();

  const handleResult = () => {
    if (hour >= shift) {
      const calculation = (hour - shift) * 60 + (minute - pause);
      const divide = calculation / 60;
      setResult(calculation);
      setResultTwo(divide);
    } else if (shift === "23" || shift === "19") {
      const time = 24;
      const calculationTwo = (time - shift) * 60 + hour * 60 + (minute - pause);
      const divideTwo = calculationTwo / 60;
      setResult(calculationTwo);
      setResultTwo(divideTwo);
    } else {
      const calculation = (hour - shift) * 60 + (minute - pause);
      const divide = calculation / 60;
      setResult(calculation);
      setResultTwo(divide);
    }
  };

  // const handleReset = (e) => {
  //   e.preventDefault();
  //   setHour("");
  //   setMinute("");
  // };

  return (
    <>
      <form className="form">
        <div className="form-content">
          <label htmlFor="hour">Saat :</label>
          <input
            id="hour"
            type="number"
            placeholder="Saati Giriniz"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            onKeyUp={handleResult}
            disabled={!shift}
            className="form-input"
          />
        </div>
        <div className="form-content">
          <label htmlFor="minute">Dakika :</label>
          <input
            id="minute"
            type="number"
            placeholder="Dakikayı Giriniz"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            onKeyUp={handleResult}
            disabled={!shift}
            className="form-input"
          />
        </div>
        <div className="form-content">
          <label htmlFor="pause">Mola :</label>
          <input
            id="pause"
            type="number"
            placeholder="Molayı Giriniz"
            value={pause}
            onChange={(e) => setPause(e.target.value)}
            onKeyUp={handleResult}
            disabled={!shift}
            className="form-input"
          />
        </div>
        <select
          className="form-select"
          onChange={(e) => setShift(e.target.value)}
        >
          <option>Vardiya Seçiniz</option>
          <option value="8">08:00-16:00</option>
          <option value="16">16:00-00:00</option>
          <option value="7">07:00-15:00</option>
          <option value="15">15:00-23:00</option>
          <option value="23">23:00-07:00</option>
          <option value="19">19:00-07:00</option>
        </select>
      </form>
      <div className="result-container">
        <div className="result-content">
          <label> Saat: </label>
          <input type="number" value={resultTwo} className="form-input" />
        </div>
        <div className="result-content">
          <label>Dakika : </label>
          <input type="number" value={result} className="form-input" />
        </div>
      </div>
    </>
  );
}
