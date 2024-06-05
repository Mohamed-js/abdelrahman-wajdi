import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";
import WorksData from "../components/WorksData";
import Loading from "../components/Loading";

const Form = ({ isLoggedIn }) => {
// Change initial states of descriptions, titles, and images to empty arrays
const [descriptions, setDescriptions] = useState([]);
const [titles, setTitles] = useState([]);
const [images, setImages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showDetailsInput, setShowDetailsInput] = useState(false);
  const navigate = useNavigate();
  const [firstTitle, setFirstTitle] = useState("");
  const [firstImage, setFirstImage] = useState("");
  const [problem, setProblem] = useState(""); // New state for Problem
  const [solution, setSolution] = useState(""); // New state for Solution
  const [projectBrief, setProjectBrief] = useState(""); // New state for Project Brief
  const [loading, setLoading] = useState(false); // State to manage loading


  useEffect(() => {
    const allDescriptionsFilled = descriptions.every((desc) => desc !== "");
    const allImagesUploaded = images.every((img) => img !== "");
    const isSelectOptionChosen = selectedOption !== "";
    const isProblemFilled = problem !== "";
    const isSolutionFilled = solution !== "";
    const isProjectBriefFilled = projectBrief !== "";

    setIsFormValid(
      allDescriptionsFilled &&
        allImagesUploaded &&
        isSelectOptionChosen &&
        isProblemFilled &&
        isSolutionFilled &&
        isProjectBriefFilled
    );
  }, [descriptions, images, selectedOption, problem, solution, projectBrief]);

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const handleFirstImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ca0qjdpw");
  
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dwawhl9j4/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setFirstImage(data.secure_url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary", error);
      // Provide feedback to the user about the error
      setSubmitMessage("Failed to upload image. Please try again.");
    }
  };
  
  // Inside your JSX, update the first image input change handler to use this function
  
  <input
    type="file"
    id={`image`}
    onChange={(e) => handleFirstImageUpload(e.target.files[0])}
    className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
    required
  />

  
  const handleImageUpload = async (index, file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ca0qjdpw");
  
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dwawhl9j4/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      const updatedImages = [...images]; // Copy the images array
      updatedImages[index] = data.secure_url; // Update the URL at the specified index
      setImages(updatedImages); // Update the images state array
    } catch (error) {
      console.error("Error uploading image to Cloudinary", error);
      // Provide feedback to the user about the error
      setSubmitMessage("Failed to upload image. Please try again.");
    }
  };
  
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const resetForm = () => {
    setDescriptions([""]);
    setTitles([""]); // Clear titles as well
    setImages([""]);
    setSelectedOption("");
    setProblem("");
    setSolution("");
    setProjectBrief("");
    setIsFormValid(false);
  };

  const handleFormSubmit = async () => {
    setLoading(true);
    if (isLoggedIn) {
      try {
     
        const isAtLeastOneDescription = descriptions.some(desc => desc.trim() !== "");
        const isAtLeastOneImage = images.some(img => img.trim() !== "" && img !== undefined);
  
        if (!isAtLeastOneDescription || !isAtLeastOneImage) {
          alert("Please add at least one description and image.");
          return;
        }
        const combinedData = descriptions.map((desc, index) => ({
          title: titles[index], // Include title
          description: desc,
          image: images[index],
        }));

        const newProduct = {
          firstTitle,
          firstImage,
          selectedOption,
          problem,
          solution,
          projectBrief,
          combinedData,
        };
console.log(newProduct)
        await addDoc(collection(db, "formSubmissions"), newProduct);
        setSubmitMessage("Form submitted successfully!");
        resetForm();
        setFirstImage("");
        setImages([]);
      } catch (error) {
        console.error("Error submitting form data to Firebase", error);
        setSubmitMessage("Failed to submit form. Please try again.");
      }finally {
        setLoading(false); // Reset loading state after form submission is complete
      }
    } else {
      alert("You must be logged in to submit the form.");
    }
  };

  const addDetails = () => {
    setShowDetailsInput(true);
    setTitles([...titles, ""]); // Add empty title
    setDescriptions([...descriptions, ""]);
    setImages([...images, ""]); 
  };
  
  return (
    <>
    <div className="flex justify-center py-32 items-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl w-full p-6 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Form</h2>
        <form action="">
          <div className="h-[300px] overflow-y-auto p-4">
            <div className="mb-4">
              <label
                htmlFor={`title`}
                className="block text-gray-300 font-medium mb-2"
              >
                Title
              </label>
              <input
                id={`title`}
                onChange={(e) => setFirstTitle(e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
                required
              />
              <label
                htmlFor={`image`}
                className="block text-gray-300 font-medium mb-2 mt-4"
              >
                Image
              </label>
              <input
  type="file"
  id={`image`}
  onChange={(e) => handleFirstImageUpload(e.target.files[0])}
  className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
  required
/>
            </div>
            {descriptions.map((desc, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={`title-${index}`}
                  className="block text-gray-300 font-medium my-4"
                >
                  Title {index + 1}
                </label>
                <input
                  id={`title-${index}`}
                  value={titles[index]} // Bind title
                  onChange={(e) => {
                    const newTitles = [...titles];
                    newTitles[index] = e.target.value;
                    setTitles(newTitles);
                  }}
                  className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
                  required
                />
                <label
                  htmlFor={`description-${index}`}
                  className="block text-gray-300 font-medium my-4"
                >
                  Description {index + 1}
                </label>
                <textarea
                  id={`description-${index}`}
                  value={descriptions[index]}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                  rows="
                  3"
                  className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
                  required
                />
                <label
                  htmlFor={`image-${index}`}
                  className="block text-gray-300 font-medium mb-2 mt-4"
                >
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  id={`image-${index}`}
                  onChange={(e) => handleImageUpload(index, e.target.files[0])}
                  className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
                  required
                />
                
              </div>
            ))}
          </div>
          {/* Button to add details */}
          <button
            type="button"
            onClick={addDetails}
            className="my-8 bg-gray-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring"
          >
            Add Details
          </button>
          <div className="mb-4">
            <label
              htmlFor="select-option"
              className="block text-gray-300 font-medium mb-2"
            >
              Select Option
            </label>
            <select
              id="select-option"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
              required
            >
              <option value="">Select...</option>
              <option value="Web Design">Web Design</option>
              <option value="Social Media Management">
                Social Media Management
              </option>
              <option value="Logo & Branding">Logo & Branding</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="problem"
              className="block text-gray-300 font-medium mb-2"
            >
              Problem
            </label>
            <textarea
              id="problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="solution"
              className="block text-gray-300 font-medium mb-2"
            >
              Solution
            </label>
            <textarea
              id="solution"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="project-brief"
              className="block text-gray-300 font-medium mb-2"
            >
              Project Brief
            </label>
            <textarea
              id="project-brief"
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:ring focus:ring-blue-400 text-white"
              required
            />
          </div>
          <hr className="my-6" />
          <button
            type="button"
            onClick={() => {
              if (isFormValid) {
                handleFormSubmit();
                console.log("Form submitted");
              } else {
                alert("Please fill out all required fields.");
              }
            }}
            className={`w-full mt-4 bg-[#e6953e] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#f8ad5d] focus:outline-none focus:ring ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isFormValid}
          >
            Submit Form
          </button>
          {submitMessage && (
            <div
              className={`mt-4 p-4 ${
                submitMessage.includes("successfully")
                  ? "bg-green-500"
                  : "bg-red-500"
              } text-white rounded-md`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
    {loading && ( // Conditional rendering for loading spinner
       <Loading />
      )}
    <WorksData />
    </>
  );
};

export default Form;
