// import React, { useState, useEffect } from "react";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../helpers/firebase";
// import Loading from "./Loading";

// const WorksData = () => {
//   const [formSubmissions, setFormSubmissions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchFormSubmissions = async () => {
//       try {
//         setLoading(true);
//         const querySnapshot = await getDocs(collection(db, "formSubmissions"));
//         const submissions = [];
//         querySnapshot.forEach((doc) => {
//           submissions.push({ id: doc.id, ...doc.data() });
//         });
//         setFormSubmissions(submissions);
//       } catch (error) {
//         console.error("Error fetching form submissions: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFormSubmissions();
//   }, []);

//   const handleDelete = async (id) => {
//     setLoading(true)
//     try {
//       await deleteDoc(doc(db, "formSubmissions", id));
//       setFormSubmissions((prevSubmissions) =>
//         prevSubmissions.filter((submission) => submission.id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting form submission: ", error);
//     }finally{
//       setLoading(false)
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-wrap justify-center py-8">
//         {formSubmissions.length > 0 ? (
//           formSubmissions.map((submission) => (
//             <div key={submission.id} className="m-4 p-4 bg-gray-400 rounded-lg">
//               <h2 className="text-lg font-semibold mb-2">{submission.firstTitle}</h2>
//               <img src={submission.firstImage} alt={submission.firstTitle} className="w-64 h-32 mb-2 object-cover rounded-md" />
//               <button onClick={() => handleDelete(submission.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-2xl text-white p-8">No Data Found</div>
//         )}
//       </div>
//       {loading && <Loading />}
//     </>
//   );
// };

// export default WorksData;

import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../helpers/firebase";
import Loading from "./Loading";

const WorksData = ({
  formSubmissions,
  setFormSubmissions,
  fetchFormSubmissions,
}) => {
  const [loading, setLoading] = useState(false);
  // State for handling modal visibility and editing data
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSubmission, setEditingSubmission] = useState(null);

  useEffect(() => {
    fetchFormSubmissions();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "formSubmissions", id));
      setFormSubmissions((prevSubmissions) =>
        prevSubmissions.filter((submission) => submission.id !== id)
      );
    } catch (error) {
      console.error("Error deleting form submission: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Open modal for editing
  const handleEdit = (submission) => {
    setEditingSubmission(submission);
    setIsEditModalOpen(true);
  };

  // Handle changes in the modal form inputs
  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setEditingSubmission((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Upload a new image if selected in the modal
  const handleModalImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    // Change this to your Cloudinary preset if needed
    formData.append("upload_preset", "profile");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dax1l4hqj/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setEditingSubmission((prev) => ({
        ...prev,
        firstImage: data.secure_url,
      }));
    } catch (error) {
      console.error("Error uploading image in modal", error);
    }
  };

  const handleCombinedDataImageUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    // Make sure to change the preset if needed
    formData.append("upload_preset", "profile");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dax1l4hqj/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      handleCombinedDataChange(index, "image", data.secure_url);
    } catch (error) {
      console.error("Error uploading combined image", error);
    }
  };

  // Save the changes made in the modal
  const handleModalSave = async () => {
    setLoading(true);
    try {
      const { id, ...updatedData } = editingSubmission;
      await updateDoc(doc(db, "formSubmissions", id), updatedData);
      // Update the local state with the edited submission
      setFormSubmissions((prevSubmissions) =>
        prevSubmissions.map((submission) =>
          submission.id === id ? editingSubmission : submission
        )
      );
      setIsEditModalOpen(false);
      setEditingSubmission(null);
    } catch (error) {
      console.error("Error updating form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCombinedDataChange = (index, field, value) => {
    setEditingSubmission((prev) => {
      const updatedCombinedData = [...(prev.combinedData || [])];
      updatedCombinedData[index] = {
        ...updatedCombinedData[index],
        [field]: value,
      };
      return { ...prev, combinedData: updatedCombinedData };
    });
  };

  // Add a new combined data object (with empty fields)
  const handleAddCombinedData = () => {
    setEditingSubmission((prev) => {
      const updatedCombinedData = prev.combinedData
        ? [...prev.combinedData]
        : [];
      // Push a new object with default empty fields
      updatedCombinedData.push({ title: "", description: "", image: "" });
      return { ...prev, combinedData: updatedCombinedData };
    });
  };

  // Remove a combined data object at a given index
  const handleDeleteCombinedData = (index) => {
    setEditingSubmission((prev) => {
      const updatedCombinedData = prev.combinedData
        ? [...prev.combinedData]
        : [];
      updatedCombinedData.splice(index, 1);
      return { ...prev, combinedData: updatedCombinedData };
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center py-8">
        {formSubmissions.length > 0 ? (
          formSubmissions.map((submission) => (
            <div key={submission.id} className="m-4 p-4 bg-gray-400 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">
                {submission.firstTitle}
              </h2>
              <img
                src={submission.firstImage}
                alt={submission.firstTitle}
                className="w-64 h-32 mb-2 object-cover rounded-md"
              />
              <div className="flex justify-between flex-wrap space-x-2">
                <button
                  onClick={() => handleDelete(submission.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(submission)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl text-white p-8">
            No Data Found
          </div>
        )}
      </div>
      {loading && <Loading />}

      {/* Edit Modal */}
      {isEditModalOpen && editingSubmission && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-md max-h-[60%] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Edit Submission
            </h2>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">First Title</label>
              <input
                type="text"
                name="firstTitle"
                value={editingSubmission.firstTitle}
                onChange={handleModalChange}
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Case Study</label>
              <input
                type="text"
                name="caseStudy"
                value={editingSubmission.caseStudy}
                onChange={handleModalChange}
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                Selected Option
              </label>
              <select
                name="selectedOption"
                value={editingSubmission.selectedOption}
                onChange={handleModalChange}
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
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
              <label className="block text-gray-300 mb-2">Problem</label>
              <textarea
                name="problem"
                value={editingSubmission.problem}
                onChange={handleModalChange}
                rows="3"
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Solution</label>
              <textarea
                name="solution"
                value={editingSubmission.solution}
                onChange={handleModalChange}
                rows="3"
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Project Brief</label>
              <textarea
                name="projectBrief"
                value={editingSubmission.projectBrief}
                onChange={handleModalChange}
                rows="3"
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">First Image</label>
              {editingSubmission.firstImage && (
                <img
                  src={editingSubmission.firstImage}
                  alt="Submission"
                  className="w-32 h-20 mb-2 object-cover rounded-md"
                />
              )}
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleModalImageUpload(e.target.files[0]);
                  }
                }}
                className="w-full px-3 py-2 border rounded-md bg-gray-700 text-white"
              />
            </div>
            {editingSubmission.combinedData &&
              editingSubmission.combinedData.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Combined Details
                  </h3>
                  {editingSubmission.combinedData.map((item, index) => (
                    <div
                      key={index}
                      className="mb-4 p-2 border rounded-md bg-gray-700"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          Detail #{index + 1}
                        </span>
                        <button
                          onClick={() => handleDeleteCombinedData(index)}
                          className="text-red-500 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                      <label className="block text-gray-300 mb-1">Title</label>
                      <input
                        type="text"
                        value={item.title || ""}
                        onChange={(e) =>
                          handleCombinedDataChange(
                            index,
                            "title",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border rounded-md bg-gray-600 text-white"
                      />

                      <label className="block text-gray-300 mt-2 mb-1">
                        Description
                      </label>
                      <textarea
                        value={item.description || ""}
                        onChange={(e) =>
                          handleCombinedDataChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        rows="2"
                        className="w-full px-3 py-2 border rounded-md bg-gray-600 text-white"
                      ></textarea>

                      <label className="block text-gray-300 mt-2 mb-1">
                        Image
                      </label>
                      {item.image && (
                        <img
                          src={item.image}
                          alt="Combined Data"
                          className="w-32 h-20 mb-2 object-cover rounded-md"
                        />
                      )}
                      <input
                        type="file"
                        onChange={(e) =>
                          handleCombinedDataImageUpload(e, index)
                        }
                        className="w-full px-3 py-2 border rounded-md bg-gray-600 text-white"
                      />
                    </div>
                  ))}
                  {/* Button to add a new combined data object */}
                </div>
              )}
                  <button
                    onClick={handleAddCombinedData}
                    className="bg-green-500 text-white px-3 py-1 rounded-md my-4"
                  >
                    Add New Detail
                  </button>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditingSubmission(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorksData;
