import React, { useState } from "react";
// const withPreventDefault = (fn) => (event) => {
//     event.preventDefault();
//     fn(event);
//   };

export default function TextArea (props) {
  const [text,setText]=useState("")

  const handleLowerCase=()=>{
    setText(text.toLowerCase())
    props.showAlert("Converted to Lower Case", "Success")
  }

  const handleUpperCase=()=>{
    setText(text.toUpperCase())
    props.showAlert("Converted to Upper Case", "Success")
  }

  const handleRemoveExtra=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "Success")
  }

  const handleCopy=()=>{
    let copyText = document.getElementById("text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
    // alert(copyText.value+" Has been copied")
    props.showAlert("Text has been Copied", "Success")
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)

  }

  const handleClear=()=>{
    alert("Are you Sure?")
    setText("")
    props.showAlert("All text Cleared", "Success")
  }

  return (
    <div>
      <div className={`form-group container my-3 p-3`}>
        <h2 style={props.colorText}>Enter your Text </h2>
        <textarea
          className={`form-control content`}
          id="text"
          // style={props.theme}
          rows="8"
          placeholder="Start Writing"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="my-2">
          <button className="btn btn-primary mx-2" onClick={handleLowerCase} >Convert to Lower Case</button>
          <button className="btn btn-warning mx-2" onClick={handleUpperCase}>Convert to Upper Case</button>
          <button className="btn btn-secondary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
          <button className="btn btn-success mx-2" onClick={handleRemoveExtra}>Remove Extra Spaces</button>
          <button className="btn btn-danger mx-2" onClick={handleClear}>Clear All</button>
        </div>
        <div className="my-3">
          <h2 style={props.colorText}>Preview</h2>
          <h4 style={props.colorText}>Words length: {text.length==0? 0: (text.split(" ")).length}</h4>
          <p style={props.colorText}>{text.length==0? "No preview Available!!! Please Enter something to show":text}</p>

        </div>
      </div>
    </div>
  );
}
