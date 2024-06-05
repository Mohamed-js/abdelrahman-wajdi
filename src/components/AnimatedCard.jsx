import { useSpring, animated } from "react-spring";

const AnimatedCard = ({ item, index }) => {
  const fadeInAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200 * index, // Delay each card's animation based on its index
  });

  const scaleAnimation = useSpring({
    from: { transform: "scale(0.9)" },
    to: { transform: "scale(1)" },
    config: { tension: 200, friction: 12 },
  });

  return (
    <animated.div style={{ ...fadeInAnimation, ...scaleAnimation }}>
      <div className="bg-[#1a1a1a] rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">{item.title}</h2>
          <p className="text-sm text-gray-400">Additional Information</p>
        </div>
        <p className="text-lg text-gray-300">{item.description}</p>
        <img
          src={item.image}
          alt={`Image ${index}`}
          className="w-full h-auto rounded-lg shadow-xl mt-4"
        />
      </div>
    </animated.div>
  );
};

const CardsGrid = ({ workDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {workDetails.combinedData.map((item, index) => (
        <AnimatedCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default CardsGrid;
