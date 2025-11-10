import React, { useEffect, useRef, useState } from 'react';

const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const LiveUserCounter = ({
  initialMin = 120,
  initialMax = 180,
  min = 90,
  max = 220,
  interval = 4500,
  label = 'Live',
  suffix = 'people browsing',
  indicatorColor = '#1fa971',
  className = '',
}) => {
  const [count, setCount] = useState(() => getRandomInRange(initialMin, initialMax));
  const directionRef = useRef(Math.random() > 0.5 ? 1 : -1);

  useEffect(() => {
    const tick = () => {
      setCount((prev) => {
        const change = getRandomInRange(1, 4) * directionRef.current;
        const next = prev + change;

        if (next <= min || next >= max) {
          directionRef.current = -directionRef.current;
          return Math.min(
            max,
            Math.max(min, prev + getRandomInRange(1, 3) * directionRef.current),
          );
        }

        return next;
      });
    };

    const timer = setInterval(tick, interval);
    return () => clearInterval(timer);
  }, [interval, max, min]);

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-[#d4d4d4] bg-white px-3 py-1.5 text-xs text-black shadow-[0_10px_16px_rgba(0,0,0,0.12)] ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          className="absolute inset-0 animate-ping rounded-full opacity-70"
          style={{ backgroundColor: indicatorColor }}
        />
        <span
          className="relative inline-flex h-full w-full rounded-full"
          style={{ backgroundColor: indicatorColor }}
        />
      </span>
      {label ? (
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-black/70">
          {label}
        </span>
      ) : null}
      <div className="flex items-baseline gap-1">
        <span className="text-sm font-semibold text-black">{count}</span>
        {suffix ? (
          <span className="text-[0.65rem] font-medium text-black/60">{suffix}</span>
        ) : null}
      </div>
    </div>
  );
};

export default LiveUserCounter;

