import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LayoutWeb from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contents from "./pages/Contents";
import Post from "./components/Post";
import Image from "./components/Image";
import PageDetail from "./pages/PageDetail";
import Admin from "./pages/Admin";
import Add from "./components/Admin/add";
import Update from "./components/Admin/update";
import Delete from "./components/Admin/delete";
import View from "./components/Admin/view";
import Pages from "./pages/Pages";
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
          <Route path="current-events" element={<Register />} />
          <Route path="page/:id" element={<PageDetail />} />
          <Route path="pages/:key" element={<Pages />} />
          <Route path="pages" element={<Pages />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<Add />} />
          <Route path="add" element={<Add />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />}>
            <Route path="view" element={<View />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
