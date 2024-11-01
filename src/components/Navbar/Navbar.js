import React from "react";
import "./Navbar.scss";

const Navbar = ({ onMenuItemSelect }) => {
  const menuItems = [
    { name: "Home", icon: "fa-solid fa-home" },
    { name: "Urgent Patients", icon: "fa-solid fa-user-injured" },
    { name: "Future Events", icon: "fa-solid fa-calendar" },
    { name: "Notifications", icon: "fa-solid fa-bell" },
    { name: "Payment & Billing", icon: "fa-solid fa-credit-card" },
    { name: "Appointment History", icon: "fa-solid fa-clock" },
    { name: "Statics & Reports", icon: "fa-solid fa-chart-line" },
  ];

  const doctorName = "Joe Atlas";
  const doctorMail = "joe.atlas@gmail.com";

  return (
    <div className="navbar">
      <div className="profile">
        <div className="pp-names">
          <img src={require("../doc_pp.jpg")} alt="doctor pp" />

          <div className="names">
            <p> {doctorName} </p>
            <p> {doctorMail} </p>
          </div>
        </div>
        <i className="fa-solid fa-right-from-bracket"></i>
      </div>
      <div className="menus">
        <div className="navbar-top-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => onMenuItemSelect(item.name)}>
                <i className={item.icon}></i> {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-bottom-menu">
          <ul>
            <li onClick={() => onMenuItemSelect("Privacy & Settings")}>
              Privacy & Settings
            </li>
            <li onClick={() => onMenuItemSelect("About Clinic")}>
              About Clinic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
