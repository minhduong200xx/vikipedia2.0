import { Link, Outlet } from "react-router-dom";
const Contents = () => {
  //   const navigate = useNavigate();
  return (
    <div className="flex flex-row h-full">
      <div className=" w-36 h-full flex flex-col font-bold gap-2">
        <Link to={"/contents/post"}>Bài viết</Link>
        <Link to={"/contents/image"}>Hình ảnh</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Contents;
