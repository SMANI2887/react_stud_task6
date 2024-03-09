import React, { useContext } from "react";
import { studend } from "../App";
import axios from "axios";

function CreateStud() {
  const {
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
  } = useContext(studend);

  const AddStud = (e) => {
    e.preventDefault();

    const studObj = {
      id: stud.length + 1,
      roll_No: rollstd,
      studname: newstd,
      Mark: mark,
      teacher_name: teacher,
    };
    axios
      .post("https://65e085d8d3db23f7624981b1.mockapi.io/user/", studObj)
      .then((res) => {
        console.log("stud added successfully... ");
        location.reload();
      });
  };
  return (
    <>
      <h2 style={{
        backgroundColor:"#702963",
        color:"wheat",
        textAlign:"center"
      }}>STUDENT DETAILS</h2>
      <div className="form-div">
        <form onSubmit={AddStud}>
          <input
            placeholder="Stud RollNo"
            name="filter"
            onChange={(e) => setRollstd(e.target.value)}
            ref={rollRef}
            value={rollstd}
            required
          />
          <input
            placeholder="Stud Name"
            name="filter"
            onChange={(e) => setNewstd(e.target.value)}
            ref={nameRef}
            value={newstd}
            required
          />
          <input
            placeholder="Stud Mark"
            name="filter"
            onChange={(e) => setMark(e.target.value)}
            ref={markRef}
            value={mark}
            required
          />

          <input
            placeholder="Teacher Name"
            name="filter"
            onChange={(e) => setTeacher(e.target.value)}
            ref={teachRef}
            value={teacher}
            required
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default CreateStud;
