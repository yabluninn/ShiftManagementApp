/* eslint-disable react/prop-types */

export default function SecondaryButton({ text, icon, onClick }) {
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
    border: "1px solid",
    borderRadius: "8px",
    backgroundColor: "transparent",
    color: "var(--primary-color)",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: "12px",
  },
};
