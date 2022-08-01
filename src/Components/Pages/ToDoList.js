import { useEffect, useState, useRef, useReducer } from "react";
import { API_GET_DATA } from '../js/Constants';
import Edit from "../js/Edit";
import List from "../js/List";
import "../css/ToDoList.css";

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

async function fetchSetData(data) {
    const res = await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}


const ToDoList = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(data)
    .then(data => submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="container-fluid toDoList">
      <Edit add={setData} submittingStatus={submittingStatus}/>
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
    </div>
  );
};

export default ToDoList;
