import React, { useState, useEffect } from "react";
import "./EventItem.scss";
import { getDocs, collection } from "firebase/firestore";
import {db} from "../../firebaseConfig.js"

const EventItem = ({ selectedDate, onPatientSelect }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patientId) => {
    setSelectedPatient(patientId);
    onPatientSelect(patientId);
  }

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsCollection = collection(db, "patients"); 
        const patientsSnapshot = await getDocs(patientsCollection); 
        const patientsList = patientsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 

        const today = new Date();
        const selectedDateObj = new Date(selectedDate.split(".").reverse().join("-"));

        if (selectedDateObj < today) {
          setPatients([]);
        } else {
          const filteredPatients = patientsList.filter(
            (patient) => patient.date === selectedDate
          );
          setPatients(filteredPatients);
        }
      } catch (error) {
        console.error("Veriler alınamadı: ", error);
      }
    };

    fetchPatients();
  }, [selectedDate]); 


  return (
    <div className="patient-list">
      {patients.length > 0 ? (
        patients.map((patient) => (
          <div
            className={`patient-item ${selectedPatient === patient.id ? "selected" : ""}`}
            key={patient.id}
            onClick={() => handlePatientClick(patient.id)}
          >
            <div className="patient-name">
              <img src={patient.photo} alt="patient_photo" />
              <p>{patient.name}</p>
            </div>
            <p>{patient.appointment_time}</p>
          </div>
        ))
      ) : (
        <h5>You currently have no patients...</h5>
      )}
    </div>
  );
};

export default EventItem;
