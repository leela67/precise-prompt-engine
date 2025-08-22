import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const Counter = ({ end, suffix, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [end, duration, hasStarted]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onViewportEnter={() => setHasStarted(true)}
    >
      <div className="text-5xl lg:text-6xl font-light text-white mb-2 font-serif">
        {Math.floor(count)}{suffix}
      </div>
    </motion.div>
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
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/V7bxnKBJLKWLeFJJsbtEAYNbc8.jpg"
          alt="Luxury real estate background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-overline text-white/80 mb-4 tracking-widest">
            Why Choose Us?
          </p>
          <h2 className="heading-lg text-white font-serif">
            More Than a Real Estate Agent
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-lg text-white/90 font-medium mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;