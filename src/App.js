import "./App.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import PrimaryButton from "./components/Buttons/PrimaryButton.js";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu.js";
import EventItem from "./components/EventsList/EventItem.js";
import PickADate from "./components/PickADate/PickADate.js";
import PatientCard from "./components/PatientDetails/PatientCard.js";
import MoreInfoCard from "./components/PatientDetails/MoreInfoCard.js";
import Home from "./components/Home/Home.js";

import Model from "./components/PatientDetails/Model.js";

// import patientsData from "./patients_gendered.json";
// import AddPatient from "./AddPatient.js";

import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

import "font-awesome/css/font-awesome.min.css";
// import EventsList from "./components/EventsList/EventsList.js";
// import PatientDetails from "./components/PatientDetails/PatientDetails.js";

function App() {
  //selected menu header
  const [selectedMenuItem, setSelectedMenuItem] = useState("Home");
  const [chosenDate, setChosenDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  //selected patient from the patients list
  const [selectedPatient, setSelectedPatient] = useState(null);
  //to store patients
  const [patients, setPatients] = useState([]);
  // show MoreInfoCard Component
  const [showMoreInfoCard, setShowMoreInfoCard] = useState(false);
  //button activity
  const [isActive, setIsActive] = useState(false);
  // to control patient-details div's visibility
  const [showPatientDetails, setShowPatientDetails] = useState(false);
  // show future patients
  const [showFuturePatients, setShowFuturePatients] = useState(false);

  //fetching data from firebase
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsCollection = collection(db, "patients");
        const patientsSnapshot = await getDocs(patientsCollection);
        const patientsList = patientsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(patientsList);
      } catch (error) {
        console.log("could not load data:", error);
      }
    };
    fetchPatients();
  }, []);

  useEffect(() => {
    console.log("selected menu item:" , selectedMenuItem);
  }, [selectedMenuItem]);

  //HANDLE FUNCTIONS
  //getting patient by using id
  const handlePatientSelect = (id) => {
    const patient = patients.find((patient) => patient.id === id); //find patient
    setSelectedPatient(patient); //add patient to state
    setShowPatientDetails(true);
  };
  //the function to go back
  const handleBack = () => {
    window.history.back();
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

  const handleFuturePatients = () => {
    setShowFuturePatients(true);
    setSelectedMenuItem("Future Events");
    console.log(selectedMenuItem);
  };
  

  return (
    <div className="app">
      <div className="navbar">
        <Navbar onMenuItemSelect={handleMenuItemSelect} selectedMenuItem={selectedMenuItem}/>
      </div>
      <div className="side-bar">
        {selectedMenuItem === "Home" && ( // show home when side-bar is hidden
          <div className="home">
            <Home handleFuturePatients={handleFuturePatients} />
          </div>
        )}
        {selectedMenuItem === "Future Events" && showFuturePatients &&( // show side-bar when it's activated
          <div className="future-events">
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
                        ? chosenDate
                            .toLocaleDateString("tr-TR")
                            .replace(/\//g, ".")
                        : ""
                    }
                    onPatientSelect={handlePatientSelect}
                  />
                </div>
              </div>
              <div
                className="patient-details"
                style={{ display: showPatientDetails ? "block" : "none" }}
              >
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
        )}
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
