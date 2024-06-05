import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { FaRegFileAlt } from "react-icons/fa";

const ProjectBrief = ({ workDetails }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const fadeInAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  const rotateAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: inView ? "rotate(360deg)" : "rotate(0deg)" },
    config: { duration: 2000 },
  });

  const scaleAnimation = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: inView ? "scale(1)" : "scale(0)" },
    config: { duration: 1000 },
  });

  return (
    <div ref={ref} className="max-w-5xl my-24 mx-auto p-8 relative">
      <animated.div style={fadeInAnimation} className="text-center">
        <div className="flex items-center mb-8 justify-center">
          <animated.div style={rotateAnimation}>
            <FaRegFileAlt className="text-3xl text-[#e6953e] mr-2" />
          </animated.div>
          <h2 className="text-3xl font-semibold" style={{ color: "#e6953e" }}>
            Project Brief
          </h2>
        </div>
        <animated.p style={scaleAnimation} className="text-lg text-white">
          {workDetails.projectBrief} lets put some description to see how it
          would look like and where are the border of it
        </animated.p>
      </animated.div>
      <div>
        {/* Your stunning content here */}
      </div>
    </div>
  );
};

export default ProjectBrief;
