import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";
import bgImg from "../assets/imgs/bg-img.jpg";
import {
  FaDesktop,
  FaShareAlt,
  FaPalette,
  FaClipboardList,
} from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import ProjectBrief from "../components/ProjectBrief";
import Footer from "../components/Footer";
import AnimatedHeart from "../components/AnimatedShape";
import Loading from "../components/Loading";

const getIcon = (selectedOption) => {
  switch (selectedOption) {
    case "Web Design":
      return <FaDesktop className="text-3xl text-[#e6953e]" />;
    case "Social Media Management":
      return <FaShareAlt className="text-3xl text-[#e6953e]" />;
    case "Logo & Branding":
      return <FaPalette className="text-3xl text-[#e6953e]" />;
    default:
      return null;
  }
};

const AnimatedShape = () => {
  const shapeProps = useSpring({
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
    <animated.div style={shapeProps}>
      {/* Define your animated shape here */}
      <div className="bg-red-500 rounded-full w-10 h-10"></div>
    </animated.div>
  );
};

export default function WorkDetails() {
  const { id } = useParams();
  const [workDetails, setWorkDetails] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const refProblem = useRef(null);
  const refSolution = useRef(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchWorkDetails = async () => {
      try {
        const docRef = doc(db, "formSubmissions", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWorkDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetching (whether successful or not)
      }
    };
    fetchWorkDetails();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  useEffect(() => {
    if (refProblem.current && refSolution.current) {
      const problemRect = refProblem.current.getBoundingClientRect();
      const solutionRect = refSolution.current.getBoundingClientRect();

      const problemTop = problemRect.top + window.scrollY;
      const solutionTop = solutionRect.top + window.scrollY;

      const problemOffset = problemTop - scrollY;
      const solutionOffset = solutionTop - scrollY;

      refProblem.current.style.transform = `translateY(${
        -problemOffset * 0.1
      }px)`;
      refSolution.current.style.transform = `translateY(${
        solutionOffset * 0.1
      }px)`;
    }
  }, [scrollY]);

  const parallaxStyle = useSpring({
    from: { transform: "translateY(0%)" },
    to: { transform: `translateY(${scrollY * 0.5}px)` },
    config: { tension: 80, friction: 20 },
  });

  return (
    <div
      className="bg-[#051118] min-h-screen w-screen overflow-hidden relative"
      dir="ltr"
    >
      <animated.div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          ...parallaxStyle,
        }}
      ></animated.div>

      {workDetails && (
        <div className="max-w-5xl mx-auto p-8  text-white my-8">
          {/* <h2 className="component-heading text-gray-600">{workDetails.selectedOption}</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-32 mb-48 gap-8 items-center">
            <animated.div className="text-center md:text-left">
              <div className="flex items-center mb-8 gap-2">
                <FaClipboardList className="text-3xl text-[#e6953e]" />
                <h1 className="text-3xl font-semibold">Case Study</h1>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                {workDetails.firstTitle}
              </h2>
              <p className="text-lg mb-4 overflow-auto max-h-[300px] relative py-2">
                {workDetails.firstDescription}
              </p>
              {/* <div className="flex items-center gap-4">
                {getIcon(workDetails.selectedOption)}
                <p className="text-lg">{workDetails.selectedOption}</p>
              </div> */}
            </animated.div>
            <animated.div>
              <img
                src={workDetails.firstImage}
                alt={workDetails.selectedOption}
                className="max-w-full h-auto  rounded-lg shadow-xl"
              />
            </animated.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-32">
            <div
              className="bg-[#0e1114] rounded-lg shadow-xl p-6"
              ref={refProblem}
            >
              <h2 className="text-xl font-semibold mb-2 text-[#e6953e]">
                Problem
              </h2>
              <p className="text-lg text-gray-300">{workDetails.problem}</p>
            </div>
            <div
              className="bg-[#0e1114] rounded-lg shadow-xl p-6"
              ref={refSolution}
            >
              <h2 className="text-xl font-semibold mb-2 text-[#e6953e]">
                Solution
              </h2>
              <p className="text-lg text-gray-300">{workDetails.solution}</p>
            </div>
          </div>

          <ProjectBrief workDetails={workDetails} />
          <h2 className="component-heading text-gray-600">Details</h2>

          <div className="grid gap-8">
            {workDetails.combinedData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl p-6 relative overflow-hidden w-full"
              >
                <div className="md:flex md:justify-between">
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold text-[#e6953e] mb-4 text-center ">
                      {item.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt={`Image ${index}`}
                    className="md:w-1/2 w-full relative max-w-full object-contain h-[400px] z-50  rounded-xl shadow-xl p-4 mb-4 transform transition duration-300 hover:scale-105"
                  />
                </div>
                <animated.div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 hover:opacity-100 transition-opacity duration-300"></animated.div>
                <div className="absolute top-0 left-0 transform translate-x-[-50%] -translate-y-1/2">
                  <AnimatedShape />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <AnimatedHeart />
      <Footer />
      {loading && <Loading />}
    </div>
  );
}
