/* eslint-disable react/prop-types */
import "./MenuButton.css";
// import { useNavigate } from "react-router-dom";

export default function MenuButton(props) {
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate(props.pagePath);
  // }

  return (
    <>
      <button className="menu-button">
        <i className={props.iconClass}></i>
        <p>{props.pageName}</p>
      </button>
    </>
  );
}
