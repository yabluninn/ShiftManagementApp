/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import PrimaryButton from "../../Button/PrimaryButton";
import SecondaryButton from "../../Button/SecondaryButton";

export default function SelectedDayPopup({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const addShift = () => {};

  const popup = (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.popup}>
        <div style={popupStyles.footer}>
          <PrimaryButton
            text="Add shift"
            icon="hgi-stroke hgi-add-01"
            onClick={addShift}
          />
          <SecondaryButton text="Close" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    popup,
    document.getElementById("selected-day-popup-root")
  );
}

const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "40%",
    height: "70%",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    flexDirection: "column",
  },
  footer: {
    width: "100%",
    height: "110px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
};
