import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  let [inputText, setInputText] = useState({ title: "", content: "" });
  let [showStat, setShowStat] = useState(false);

  function changeStatState() {
    console.log("clicked");
    setShowStat(true);
  }

  function titleChangeHandler(event) {
    setInputText({ ...inputText, title: event.target.value });
  }

  function textAreaChangeHandler(event) {
    setInputText({ ...inputText, content: event.target.value });
  }

  return (
    <form className="create-note">
      <input
        name="title"
        placeholder="Title"
        onChange={titleChangeHandler}
        value={inputText.title}
        style={{ display: showStat ? null : "none" }}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows={showStat ? "3" : "1"}
        onChange={textAreaChangeHandler}
        value={inputText.content}
        onClick={changeStatState}
      />
      <Zoom in={showStat}>
        <Fab
          type="button"
          onClick={() => {
            props.onClick(inputText);
            setInputText({ title: "", content: "" });
            setShowStat(false);
          }}
          display={showStat ? "null" : "none"}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;
