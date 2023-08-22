import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import BusinessCard from "../components/businesscard/BusinessCard";
import { db } from "../config/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function HomePage() {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Hello");
    const cardRef = doc(db, "cards", id); // Assuming 'db' is your Firestore instance
    getDoc(cardRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const cardData = docSnapshot.data();
          setData(cardData);
          console.log(cardData.selectedImageUrl);
          console.log("Card data:", cardData);
        } else {
          console.log("Card not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching card:", error);
      });
    saveUserAction();
  }, [id]);

  async function saveUserAction() {
    await setDoc(doc(db, "views", uuidv4()), {
      actualTime: new Date(),
      id: id,
      action: "view",
    });
  }
  return (
    <div className="App">
      <div className="card">
        <div className="card-content">
          <BusinessCard card={data} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
