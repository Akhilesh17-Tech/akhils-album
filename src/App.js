import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import AddAlbum from "./components/album/AddAlbum";
import EditAlbum from "./components/album/EditAlbum";
import ViewAlbum from "./components/album/ViewAlbum";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/add" element={<AddAlbum />} />
          <Route path="/album/edit/:id" element={<EditAlbum />} />
          <Route path="/album/view/:id" element={<ViewAlbum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
