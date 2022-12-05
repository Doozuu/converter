import React from "react";

function KmToMiles() {
  const [num, setNum] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setNum(event.target.value);
  };
  const reset = () => setNum(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <label htmlFor="Kilometer">Kilometer</label>
      <input
        id="kilometer"
        value={flipped ? num / 0.621371 : num}
        onChange={onChange}
        disabled={flipped}
      />
      <label htmlFor="Mile">Mile</label>
      <input
        id="mile"
        value={flipped ? num : num * 0.621371}
        onChange={onChange}
        disabled={!flipped}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default KmToMiles;
