import React from "react";
import Counter from "./Counter";

export default function CounterConsumer({ initial }) {
  return (
    <Counter initial={initial}>
      {({ increment, decrement, counter }) => (
        <div className="content" style={{ textAlign: "center" }}>
          <h1>{counter}</h1>
          <button className="button is-success" onClick={increment}>
            Increment
          </button>
          <button className="button is-danger" onClick={decrement}>
            Decrement
          </button>
        </div>
      )}
    </Counter>
  );
}
