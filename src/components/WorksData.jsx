import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../helpers/firebase";
import Loading from "./Loading";

const WorksData = () => {
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFormSubmissions = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "formSubmissions"));
        const submissions = [];
        querySnapshot.forEach((doc) => {
          submissions.push({ id: doc.id, ...doc.data() });
        });
        setFormSubmissions(submissions);
      } catch (error) {
        console.error("Error fetching form submissions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormSubmissions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "formSubmissions", id));
      setFormSubmissions((prevSubmissions) =>
        prevSubmissions.filter((submission) => submission.id !== id)
      );
    } catch (error) {
      console.error("Error deleting form submission: ", error);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center py-8">
        {formSubmissions.length > 0 ? (
          formSubmissions.map((submission) => (
            <div key={submission.id} className="m-4 p-4 bg-gray-400 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">{submission.firstTitle}</h2>
              <img src={submission.firstImage} alt={submission.firstTitle} className="w-64 h-32 mb-2 object-cover rounded-md" />
              <button onClick={() => handleDelete(submission.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl text-white p-8">No Data Found</div>
        )}
      </div>
      {loading && <Loading />}
    </>
  );
};

export default WorksData;
