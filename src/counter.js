import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{num}</b> 입니다.
      </p>
      <button onClick={() => setNum(num + 1)}>1씩 증가</button>
      <button onClick={() => setNum(num - 1)}>1씩 감소</button>
    </div>
  );
}

export default Counter;
