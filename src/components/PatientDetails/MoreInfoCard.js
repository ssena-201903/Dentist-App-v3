import React from "react";
import "./MoreInfoCard.scss";

const MoreInfoCard = ({
    ChronicHealthCondition,
    DrugAllergy,
    MedicationsState,
    CheckUpFrequency,
    BrushingHabit,
    PainStateAwake,
    Cigarette
}) => {
  return (
    <div className="card">
        <h5>More Information About Patient</h5>
      <div className="info">
        <h6>Chronic health condition</h6>
        <p>{ChronicHealthCondition}</p>
      </div>
      <div className="info">
        <h6>Drug allergy</h6>
        <p>{DrugAllergy}</p>
      </div>
      <div className="info">
        <h6>Medications he/she is taking</h6>
        <p>{MedicationsState}</p>
      </div>
      <div className="info">
        <h6>Check-up frequency</h6>
        <p>{CheckUpFrequency}</p>
      </div>
      <div className="info">
        <h6>Tooth brushing habit</h6>
        <p>{BrushingHabit}</p>
      </div>
      <div className="info">
        <h6>Does he/she feel pain when waking up?</h6>
        <p>{PainStateAwake}</p>
      </div>
      <div className="info">
        <h6>Cigarette</h6>
        <p>{Cigarette}</p>
      </div>
    </div>
  );
};

export default MoreInfoCard;
