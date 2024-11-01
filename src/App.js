import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import PrimaryButton from "./components/Buttons/PrimaryButton.js";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu.js";
import EventItem from "./components/EventsList/EventItem.js";
import PickADate from "./components/PickADate/PickADate.js";
import PatientCard from "./components/PatientDetails/PatientCard.js";
import MoreInfoCard from "./components/PatientDetails/MoreInfoCard.js";

import Model from "./components/PatientDetails/Model.js";

import patientsData from "./patients_gendered.json";
// import AddPatient from "./AddPatient.js";

import "font-awesome/css/font-awesome.min.css";
// import EventsList from "./components/EventsList/EventsList.js";
// import PatientDetails from "./components/PatientDetails/PatientDetails.js";

function App() {
  //selected menu header
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [chosenDate, setChosenDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  //selected patient from the patients list
  const [selectedPatient, setSelectedPatient] = useState(null);
  // show MoreInfoCard Component
  const [showMoreInfoCard, setShowMoreInfoCard] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //HANDLE FUNCTIONS
  //the function to go back
  const handleBack = () => {
    window.history.back();
  };

  const handlePatientSelect = (id) => {
    const patient = patientsData.find((patient) => patient.id === id); //find patient
    setSelectedPatient(patient); //add patient to state
  };

  const handleDatePicker = () => {
    setShowDatePicker((prevState) => !prevState);
  };

  // the function of to change the date
  const handleDateChange = (date) => {
    console.log("Seçilen tarih:", date);
    setChosenDate(date);
    setShowDatePicker(false);
  };

  //to update for selected menu item on header
  const handleMenuItemSelect = (item) => {
    setSelectedMenuItem(item);
  };

  const handleMoreInfoClick = () => {
    setShowMoreInfoCard(true);
    setIsActive(true);
  };

  const handleCloseMoreInfoCard = () => {
    setShowMoreInfoCard(false);
    setIsActive(false);
  };

  return (
    <div className="app">
      <div className="navbar">
        <Navbar onMenuItemSelect={handleMenuItemSelect} />
      </div>
      <div className="side-bar">
        <div className="menu-header">
          <HeaderMenu
            text="Future Events"
            selectedMenuItem={selectedMenuItem}
            onClick={handleBack}
          />
        </div>
        <div className="menu-bar">
          <div className="event-list">
            <div className="header-events">
              <h6>
                {chosenDate
                  ? chosenDate.toDateString() === new Date().toDateString()
                    ? "Today"
                    : chosenDate.toLocaleDateString()
                  : "Today"}
              </h6>
              <PrimaryButton
                text="Pick a date"
                onClick={handleDatePicker}
                fontSize="14px"
              />
            </div>
            <div className="event-items">
              <EventItem
                selectedDate={
                  chosenDate
                    ? chosenDate.toLocaleDateString("tr-TR").replace(/\//g, ".")
                    : ""
                }
                onPatientSelect={handlePatientSelect}
              />
            </div>
          </div>
          <div className="patient-details">
            <div className="btn-patient-details">
              <div className="btn-right">
                <PrimaryButton
                  text="More Information About Patient"
                  onClick={handleMoreInfoClick}
                  fontSize="14px"
                  isActive={isActive}
                />
                <PrimaryButton
                  text="Operation History"
                  onClick={handleBack}
                  fontSize="14px"
                />
              </div>
              <PrimaryButton
                text="Enter the result"
                onClick={handleBack}
                fontSize="14px"
              />
              {/* <AddPatient /> */}
            </div>
            {selectedPatient && (
              <PatientCard
                ppPath={selectedPatient.photo}
                Name={selectedPatient.name}
                Gender={selectedPatient.gender}
                BMI={selectedPatient.bmi}
                Age={selectedPatient.age}
              />
            )}
            <div className="model">
              <Model />
            </div>
          </div>
        </div>
      </div>
      {showDatePicker && (
        <PickADate
          onDateChange={handleDateChange}
          onClose={() => setShowDatePicker(false)}
        />
      )}
      {showMoreInfoCard && (
        <>
          <div className="overlay" onClick={handleCloseMoreInfoCard}></div>

          <MoreInfoCard
          ChronicHealthCondition="Diabetes"
          DrugAllergy="Penicillin"
          MedicationsState="Insulin"
          CheckUpFrequency="Every 6 months"
          BrushingHabit="Twice a day"
          PainStateAwake="Yes"
          Cigarette="No"
        />
        </>
      )}
    </div>
  );
}

export default App;
