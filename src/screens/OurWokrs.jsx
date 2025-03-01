import React, { useEffect, useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import bgImg from "../assets/imgs/bg-img.jpg";
import { useTranslation } from "react-i18next";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../helpers/firebase";
import { Link as RouterLink } from "react-router-dom";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

export default function OurWorks() {
  const { t } = useTranslation();
  const direction =
    localStorage.getItem("selectedLanguage") === "ar" ? "rtl" : "ltr";
  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const worksCollectionRef = collection(db, "formSubmissions");

      const snapshot = await getDocs(worksCollectionRef);

      console.log("snapshot", snapshot);
      const worksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setWorkData(worksData);
      setLoading(false); // Set loading to false after data fetching is complete
    };
    fetchData();

    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const groupedWorks = workData.reduce((acc, work) => {
    if (!acc[work.selectedOption]) {
      acc[work.selectedOption] = [];
    }
    acc[work.selectedOption].push(work);
    return acc;
  }, {});

  return (
    <div className="bg-[#051118] min-h-screen pt-32 w-screen overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* <h2 className="relative w-fit mx-auto text-3xl font-semibold leading-10 drop-shadow-md mb-12 capitalize text-[#b7e4ea] text-center animate__animated animate__fadeInDown">
        <svg
          className="absolute w-[200px] h-[200px] top-[-82px] left-[-35px] opacity-50 z-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2000"
        >
          <g>
            <g fill="hsl(194, 45%, 50%)" id="star">
              <path
                d="M 500 500 C 1000 1000 1000 1000 1300 750 C 1000 1000 1000 1000 2000 2000 C 1000 1000 1000 1000 750 1300 C 1000 1000 1000 1000 500 500"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
        My Projects
      </h2> */}

      {Object.entries(groupedWorks).map(([option, works]) => (
        <Element name={option} key={option} id={option}>
          <div className="animate__animated animate__fadeIn animate__slow mb-16 p-8 pt-0 max-w-5xl mx-auto  relative">
            <h2 className="component-heading text-gray-600">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
              {works
  .sort((a, b) => Number(a.order || 0) - Number(b.order || 0)) // Ensure it's a number
  .map((work, index) => (
    <RouterLink to={`/our-works/${work.id}`} key={index}>
      <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
        <img
          src={work.firstImage}
          alt={`Image ${index}`}
          className="w-full h-64 object-cover"
        />
        <div className="px-4 py-8">
          <p className="text-[#fffffc] text-base md:text-lg text-center line-clamp-3">
            {work.firstTitle}
          </p>
        </div>
      </div>
    </RouterLink>
  ))}

            </div>
          </div>
        </Element>
      ))}
      {loading && <Loading />}
      <Footer />
    </div>
  );
}
