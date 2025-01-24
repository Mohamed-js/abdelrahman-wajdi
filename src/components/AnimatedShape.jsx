import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedHeart = () => {
  const heartProps = useSpring({
    from: { scale: 0, opacity: 0 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1, opacity: 1 });
        await next({ scale: 0.8, opacity: 0.5 });
      }
    },
    config: { duration: 2000 },
  });

  return (
    <animated.div style={heartProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart"
      >
        <path d="M12 21.17l-1.42-1.42C5.05 15.34 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.05 6.84-8.58 11.25L12 21.17z" />
      </svg>
    </animated.div>
  );
};

export default AnimatedHeart;
