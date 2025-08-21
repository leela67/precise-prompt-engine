import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment;
        if (next >= end) {
          clearInterval(timer);
          return end;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-5xl lg:text-6xl font-light text-text-primary mb-2">
        {Math.floor(count)}{suffix}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: 250,
      suffix: '+',
      label: 'Transactions Closed'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years of Experience'
    },
    {
      value: 500,
      suffix: 'M+',
      label: 'in Properties Sold'
    }
  ];

  return (
    <section className="py-24 section-neutral">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-text-muted mb-4">
            Why Choose Us?
          </p>
          <h2 className="heading-lg text-text-primary">
            More Than a Real Estate Agent
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-body text-text-secondary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;