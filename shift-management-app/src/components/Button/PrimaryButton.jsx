/* eslint-disable react/prop-types */
export default function PrimaryButton({ text, icon, onClick }) {
  return (
    <>
      <button style={buttonStyles.button} onClick={onClick}>
        <i className={icon} style={buttonStyles.icon}></i>
        {text}
      </button>
    </>
  );
}

const buttonStyles = {
  button: {
    width: "100%",
    height: "50px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "var(--primary-color)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: "12px",
  },
};
