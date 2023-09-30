import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import BusinessCard from "../components/businesscard/BusinessCard";
import { db } from "../config/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function HomePage() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(true);
  const idRef = useRef(id);

  useEffect(() => {
    console.log("Hello");
    const cardRef = doc(db, "cards", id); // Assuming 'db' is your Firestore instance
    getDoc(cardRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const cardData = docSnapshot.data();
          setData(cardData);
          console.log('i fire once');
        } else {
          setShowDetail(false);
          console.log("Card not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching card:", error);
      });
      // eslint-disable-next-line
  }, []);

  async function saveUserAction() {
    await setDoc(doc(db, "views", uuidv4()), {
      actualTime: new Date(),
      id: id,
      action: "view",
    });
  }
  return (
    <div className="App">
      {showDetail ? (saveUserAction() &&
        <div className="card">
          <div className="card-content">
            <BusinessCard card={data} />
          </div>
        </div>
      ) : (
        <div>Kayıt bulunamadı</div>
      )}
    </div>
  );
}

export default HomePage;
