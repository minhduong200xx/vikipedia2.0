import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import PageReplace from "./pages/PageReplace";
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Pages = lazy(() => import("./pages/Pages"));
const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));
const PageDetail = lazy(() => import("./pages/PageDetail"));
const Contents = lazy(() => import("./pages/Contents"));
const Post = lazy(() => import("./components/Post"));
const Image = lazy(() => import("./components/Image"));
const LayoutWeb = lazy(() => import("./components/Layout"));
const View = lazy(() => import("./components/Admin/view"));
const Delete = lazy(() => import("./components/Admin/delete"));
const Add = lazy(() => import("./components/Admin/add"));
const Update = lazy(() => import("./components/Admin/update"));

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
          <Route path="page/replace/:id" element={<PageReplace />} />
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
