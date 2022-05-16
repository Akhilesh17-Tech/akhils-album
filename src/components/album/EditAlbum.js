import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditAlbum = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [album, setAlbum] = useState({
    userId: "",

    title: "",
  });
  const { userId, title } = album;

  const onInputChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let id = e.target.id.value;
    await axios.put(`http://localhost:3003/albums/${id}`, album);
    navigate("/");
    alert("Data updated successfully");
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    const result = await axios.get(`http://localhost:3003/albums/${id}`);
    setAlbum(result.data);
    console.log(result);
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
            Update Album
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAlbum;
