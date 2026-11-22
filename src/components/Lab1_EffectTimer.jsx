import { useEffect, useState } from 'react';

// LAB 1 (Slide 07): useEffect Timer
export default function Lab1EffectTimer() {
  const [count, setCount] = useState(0);
  console.log('[LAB 1] rendered');

  useEffect(() => {
    console.log('[LAB 1] timer started');
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log('[LAB 1] timer cleared');
    };
  }, []);

  return (
    <div>
      <p className="hint">Count가 1초마다 증가하는지 확인하세요.</p>
      <div className="count">Count: {count}</div>
      <p className="hint">Console에서 Render / Effect / Cleanup을 비교하세요.</p>
    </div>
  );
}
