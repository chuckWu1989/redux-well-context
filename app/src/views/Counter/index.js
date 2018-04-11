import React from "react";

const Counter = props => (
  <div>
    Count:
    <div>{props.times}</div>
    <div>
      <input type="button" value="Increase" onClick={props.onIncrease} />
      <input type="button" value="Decrease" onClick={props.onDecrease} />
    </div>
  </div>
);

export default Counter;
