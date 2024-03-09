import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import CreateStud from "./Components/CreateStud";
import ReadStud from "./Components/ReadStud";
import "./App.css";

const studend = createContext();

function App() {
  // create state
  const [stud, setStud] = useState([]);
  // new state
  const [newstd, setNewstd] = useState("");
  const [rollstd, setRollstd] = useState("");
  const [mark, setMark] = useState("");
  const [teacher, setTeacher] = useState("");

  // ref create
  const rollRef = useRef(null);
  const nameRef = useRef(null);
  const markRef = useRef(null);
  const teachRef = useRef(null);

  const fetchStud = async () => {
    try {
      const response = await axios.get(
        "https://65e085d8d3db23f7624981b1.mockapi.io/user/"
      );
      setStud(response.data);
    } catch (error) {
      console.log("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    fetchStud();
  }, []);

  return (
    <>
      <studend.Provider
        value={{
          stud,
          setStud,
          newstd,
          setNewstd,
          rollstd,
          setRollstd,
          mark,
          setMark,
          teacher,
          setTeacher,
          rollRef,
          nameRef,
          markRef,
          teachRef,
        }}
      >
        <CreateStud />
        <ReadStud />
      </studend.Provider>
    </>
  );
}

export { App as default, studend };
