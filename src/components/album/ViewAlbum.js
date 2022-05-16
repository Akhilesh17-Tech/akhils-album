import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewAlbum = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({
    UserId: "",
    id: "",
    title: "",
  });

  const { UserId, title } = album;
  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    const res = await axios.get(`http://localhost:3003/albums/${id}`);
    setAlbum(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">User Id: {UserId}</li>
        <li className="list-group-item">Id : {id}</li>
        <li className="list-group-item">Title: {title}</li>
      </ul>
    </div>
  );
};

export default ViewAlbum;
