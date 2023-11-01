import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutWeb from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contents from "./pages/Contents";
import Post from "./components/Post";
import Image from "./components/Image";
import Page from "./pages/Page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contents" element={<Contents />}>
            <Route path="post" element={<Post />}></Route>
            <Route path="image" element={<Image />}></Route>
          </Route>
          <Route path="random-article" element={<>random page</>} />
          <Route path="current-events" element={<Register />} />
          <Route path="page/*" element={<Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
