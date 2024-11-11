import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import doctorProfile from "../doc_pp.jpg";
import "./Home.scss";

const Home = ({handleFuturePatients}) => {
  return (
    <div className="home">
      <div className="relative-home">
        <h3>Welcome Back !</h3>
        <div className="entry-pp">
            <img src={doctorProfile} alt="doctor_profile"></img>
        </div>
      </div>
      <div className="home-bottom">
        <div className="entry-text">
          <h5>Joe Atlas</h5>
          <div className="paragraph">
            <p>
              Today you have <span>8</span> patients, if you're ready... Let's
              start!
            </p>
            <p>You can see other settings from the menu</p>
          </div>
        </div>
        <div className="entry-buttons">
          <PrimaryButton
            text="Go to Future Patients"
            onClick={handleFuturePatients}
            fontSize="16px"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
