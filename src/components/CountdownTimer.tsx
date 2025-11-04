import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-primary/80 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-lg">
      <span className="text-3xl md:text-5xl font-bold text-primary-foreground">{value}</span>
      <span className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/90 mt-1">
        {label}
      </span>
    </div>
  );

  if (!timeLeft) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-primary/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground text-center">
            Waiting to see the next one
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
