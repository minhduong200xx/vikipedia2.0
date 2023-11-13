import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { ComponentType, lazy } from "react";
import AllPages from "./components/Admin/AllPages";
const Login = lazy(() => delayForDemo(import("./pages/Login")));
const Register = lazy(() => import("./pages/Register"));
const Pages = lazy(() => import("./pages/Pages"));
const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));
const PageDetail = lazy(() => delayForDemo(import("./pages/PageDetail")));
const Contents = lazy(() => import("./pages/Contents"));
const Post = lazy(() => import("./components/Post"));
const Image = lazy(() => import("./components/Image"));
const LayoutWeb = lazy(() => import("./components/Layout"));
const View = lazy(() => import("./components/Admin/view"));
const Delete = lazy(() => import("./components/Admin/delete"));
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
          <Route path="pages/:key" element={<Pages />} />
          <Route path="pages" element={<Pages />} />
        </Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<AllPages />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />}>
            <Route path="view" element={<View />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function delayForDemo(promise: Promise<{ default: ComponentType<any> }>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
