import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [albums, setAlbum] = useState([]);
  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    const result = await axios.get("http://localhost:3003/albums");
    setAlbum(result.data.reverse());
    console.log(result);
  };

  const handleDeleteItem = async (id) => {
    await axios.delete(`http://localhost:3003/albums/${id}`);
    loadAlbums();
  };
  return (
    <div className="container">
      <div className="py-2">
        <table className="table caption-top border shadow">
          <caption>List of albums</caption>
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">No.</th>
              <th scope="col">UserId</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {albums.map((album, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
                <td>
                  <button
                    className="btn btn-secondary m-2"
                    onClick={() => {
                      navigate(`/album/view/${album.id}`);
                    }}
                  >
                    view
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      navigate(`/album/edit/${album.id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDeleteItem(album.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
