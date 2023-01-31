import DropDownList from "./DropDownList";
import cn from "classnames";
import "../App.css";

const DropDown = ({
  openDropDown,
  activeItem,
  isOpen,
  dropdownList,
  activeList,
}) => {
  const activeClass = cn("dropdown-wrapper", { open: isOpen });
  return (
    <div className="container">
      <div data-id="wrapper" className={activeClass}>
        <button data-id="toggle" className="btn" onClick={openDropDown}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropDownList
          dropdownList={dropdownList}
          activeItem={activeItem}
          activeList={activeList}
        />
      </div>
    </div>
  );
};

export default DropDown;