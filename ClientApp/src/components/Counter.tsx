import React from "react";

export const Counter = () => {
  const [currentCount, setCurrentCount] = React.useState(0);

  const incrementCounter = () => {
    setCurrentCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live='polite'>
        Current count: <strong>{currentCount}</strong>
      </p>

      <button className='btn btn-primary' onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};
