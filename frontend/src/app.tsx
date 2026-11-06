import { useState } from 'react';
export const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Work in Progress. This component will be used to chat with Gemini chat bot</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Count is: {count}
        </button>
      </div>
  );
};
