import React, { useState } from "react";

export default function TextFrm(props) {
  const upclic = () => {
    console.log("upper case was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted into uppercase", "success");
  };
  const loclic = () => {
    console.log("upper case was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("converted into lowercase", "success");
  };
  const handlecop = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const upchangeclic = (event) => {
    console.log("upper case was clicked");
    setText(event.target.value);
  };
  const handlespace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#3a404c" }}
    >
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          value={text}
          onChange={upchangeclic}
          id="mybox"
          rows="12"
        ></textarea>
        <button className="btn btn-primary mx-2 my-3" onClick={upclic}>
          convert to upper case
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={loclic}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handlecop}>
          copy
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handlespace}>
          remove spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#3a404c" }}
      >
        <p>
          {text.split(" ").length - 1} words and {text.length} chars
        </p>
        <p>{0.008 * text.split("").length} min to read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview it here"}</p>
      </div>
    </div>
  );
}
