import React from "react";
import "./PatientCard.scss";

const PatientCard = ({ ppPath, Name, Gender, BMI, Age }) => {
  return (
    <div className="patient-card">
      <div className="profile-section">
        <img src={ppPath} alt="patient_pp"></img>
        <h5>{Name}</h5>
        <div className="info-section">
          <div className="info">
            <h6>Gender</h6>
            <p>{Gender}</p>
          </div>
          <div className="info">
            <h6>Age</h6>
            <p>{Age}</p>
          </div>
          <div className="info">
            <h6>BMI</h6>
            <p>{BMI}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
