import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
    setNote("")
    setDate("")
    setTime("")
  }

  return (
    <div>
      <h1 style={{color: "black"}}>My task</h1>
      <p  style={{color: "black"}}>Task name: </p>
      <input type="text" className="form-control" value={note} onChange={noteChange} />
      <p  style={{color: "black"}}>Date: </p>
      <input type="date" className="form-control" value={date} onChange={dateChange} />
      <p  style={{color: "black"}}>Time:</p>
      <input type="time" className="form-control" value={time} onChange={timeChange} />
      <button type='submit' onClick={addItem} className="add form-control">
        Add
      </button>
    </div>
  );
};

export default Edit;
