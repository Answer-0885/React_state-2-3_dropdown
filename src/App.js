import { useState } from "react";
import './App.css';
import DropDown from "./components/DropDown";

function App() {
  const dropdownList = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];
  const [isOpen, setOpen] = useState(false);
  const [activeLi, setActive] = useState(false);

  const openDropDown = () => setOpen(!isOpen);

  const activeList = (e) => setActive(e.currentTarget.dataset.name);

  return (
    <DropDown
      dropdownList={dropdownList}
      activeItem={activeLi}
      activeList={activeList}
      openDropDown={openDropDown}
      isOpen={isOpen}
    />
  );
}

export default App;
