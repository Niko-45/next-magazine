import { useEffect, useState } from "react";

const getTimeLeft = (endTime) => {
  const total = endTime - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let endTime = localStorage.getItem("flashSaleEndTime");

    if (!endTime) {
      endTime = Date.now() + 4 * 24 * 60 * 60 * 1000;
      localStorage.setItem("flashSaleEndTime", endTime);
    } else {
      endTime = parseInt(endTime, 10);
    }

    const interval = setInterval(() => {
      const { total, ...rest } = getTimeLeft(endTime);

      if (total <= 0) {
        clearInterval(interval);
        localStorage.removeItem("flashSaleEndTime");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft(rest);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 text-center">
      <TimeBlock label="Days" value={timeLeft.days} />
      <TimeBlock label="Hours" value={timeLeft.hours} />
      <TimeBlock label="Minutes" value={timeLeft.minutes} />
      <TimeBlock label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};

const TimeBlock = ({ label, value }) => (
  <div>
    <div className="text-xs">{label}</div>
    <div className="text-3xl font-bold">{String(value).padStart(2, '0')}</div>
  </div>
);

export default FlashSaleTimer;