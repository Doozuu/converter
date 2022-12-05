import React from "react";

function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset(); // flip할 때마다 값이 랜덤으로 바뀌어서 리셋해줌
    setFlipped((current) => !current);
  };
  return (
    <div>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={flipped ? amount * 60 : amount} // input 값을 보여줌
        id="minutes"
        placeholder="Minutes"
        onChange={onChange} // 입력값 업데이트
        disabled={flipped === true} // flip됐을 때 입력할 수 없게
        // disabled = {flipped} 위에랑 같은 의미
      />
      <label htmlFor="hours">Hours</label>
      <input
        value={flipped ? amount : amount / 60} // 분을 60으로 나눠서 시간으로
        id="hours"
        placeholder="Hours"
        onChange={onChange} // 입력값 업데이트
        disabled={flipped === false} // flip되지 않았을 때 입력할 수 없게
        // disabled = {!flipped} 위에랑 같은 의미
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Flip"}</button>
    </div>
  );
}

export default MinutesToHours;
