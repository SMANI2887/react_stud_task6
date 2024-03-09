import React, { useContext, useState } from "react";
import { studend } from "../App";
import axios from "axios";

function ReadStud() {
  const { stud } = useContext(studend);

  const [editId, setEditId] = useState(-1);
  const [uname, setUName] = useState("");
  const [uroll, setURoll] = useState("");
  const [umark, setUmark] = useState("");
  const [uteach, setUteach] = useState("");

  const editHandle = (id) => {
    axios
      .get("https://65e085d8d3db23f7624981b1.mockapi.io/user/" + id)
      .then((res) => {
        setUName(res.data.studname);
        setURoll(res.data.roll_No);
        setUmark(res.data.Mark);
        setUteach(res.data.teacher_name);
      })
      .catch((er) => console.log(er));
    setEditId(id);
  };
  const handleUpdate = () => {
    axios
      .put("https://65e085d8d3db23f7624981b1.mockapi.io/user/" + editId, {
        id: editId,
        studname: uname,
        roll_No: uroll,
        Mark: umark,
        teacher_name: uteach,
      })
      .then((res) => {
        location.reload();
        setEditId(-1);
      })
      .catch((err) => console.log(err));
  };

  const deleteHandle = (id) => {
    // e.preventDefault();
    // console.log("button click delete");
    axios
      .delete("https://65e085d8d3db23f7624981b1.mockapi.io/user/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Mark</th>
            <th>Teacher Name</th>
            <th>Auction</th>
          </tr>
        </thead>
        <tbody>
          {
            stud.map((stud, index) =>
              stud.id === editId ? (
                <tr key={index}>
                  <td>{stud.id}</td>
                  <td>
                    <input
                      type="text"
                      value={uroll}
                      onChange={(e) => setURoll(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={uname}
                      onChange={(e) => setUName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={umark}
                      onChange={(e) => setUmark(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={uteach}
                      onChange={(e) => setUteach(e.target.value)}
                    />
                  </td>
                  <td>
                    <button style={{
                      backgroundColor:"yellow"
                    }}
                    onClick={handleUpdate}>Update</button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{stud.id}</td>
                  <td>{stud.roll_No}</td>
                  <td>{stud.studname}</td>
                  <td>{stud.Mark}</td>
                  <td>{stud.teacher_name}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#1fd655" }}
                      onClick={() => editHandle(stud.id)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ backgroundColor: "#FF7F7F" }}
                      onClick={() => deleteHandle(stud.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )
            //   })
          }
        </tbody>
      </table>
    </>
  );
}

export default ReadStud;
