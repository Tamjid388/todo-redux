import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="btn border-2 border-red-700"
    >
      {count}
    </button>
  );
};
