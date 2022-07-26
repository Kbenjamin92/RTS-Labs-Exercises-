import React from "react";
import '../styles/MyButton.css'

const MyButton = (props) => {
  return (
    <div>
        <button onClick={props.onClick} className="custom-button">{props.children}</button>
    </div>
  )};
export default MyButton;
