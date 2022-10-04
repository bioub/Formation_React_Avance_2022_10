import { useState } from "react";

function Counter({ renderValue, children, component: Component }) {
  const [count, setCount] = useState(0);

  return (
    <button className="Counter" onClick={() => setCount(count + 1)}>
       {renderValue ? renderValue(count) :
        children && children instanceof Function ? children(count) : count
       }

       {/* <Component value={count} /> */}
    </button>
  );
}

export default Counter;
