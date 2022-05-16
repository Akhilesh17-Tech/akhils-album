import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../db.json";

const AddAlbum = () => {
  let navigate = useNavigate();
  const [album, setAlbum] = useState({
    userId: "",
    id: "",
    title: "",
  });
  const { userId, id, title } = album;

  const onInputChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let id = e.target.id.value;
    if (checkIfId(db, id)) {
      alert("please choose different id, Id already exist");
      return;
    }
    await axios.post("http://localhost:3003/albums", album);
    navigate("/");
  };

  const checkIfId = (data, id) => {
    for (let x of data.albums) {
      if (x.id == id) {
        return true;
      }
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2
          className="text-center mb-4 p-2 bg-secondary"
          style={{ color: "white" }}
        >
          Add Album
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter User Id"
              name="userId"
              value={userId}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Id"
              name="id"
              value={id}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Add Album
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAlbum;
