import { Statistic } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Banner: React.FC = () => {
  const { t } = useTranslation("banner");
  return (
    <div className="w-full h-32 px-4">
      <div className="bg-gray-50 border w-full h-24 grid grid-cols-2">
        <div className=" flex items-center justify-center gap-2 w-[1/2] flex flex-col">
          <b className="text-2xl">{t("namePage")}</b>
          <p>{t("slogan")}</p>
        </div>
        <div className=" flex items-center justify-center w-[1/2] flex flex-col gap-2">
          <span className="font-bold flex items-center justify-between gap-4 w-[50%]">
            <Statistic
              className="text-sm font-medium"
              title={t("posts")}
              value={"200"}
            />
            <Statistic
              className="text-sm font-medium"
              title={t("users")}
              value={"200"}
            />
          </span>
          <span className="font-bold flex items-center justify-center gap-4 w-[1/2]">
            <Link className="font-medium" to={"/"}>
              Tạo bài
            </Link>
            <Link className="font-medium" to={"/"}>
              Sửa bài
            </Link>
            <Link className="font-medium" to={"/"}>
              Đặt câu hỏi
            </Link>
          </span>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-8 grid grid-cols-2">
        <span className="font-bold flex items-center justify-center gap-4 w-[1/2]">
          Bài viết:
          <Link className="font-medium underline" to={"/"}>
            Tra cứu
          </Link>
          <Link className="font-medium underline" to={"/"}>
            Gần đây
          </Link>
          <Link className="font-medium underline" to={"/"}>
            Thảo luận
          </Link>
        </span>
        <span className="font-bold flex items-center justify-center gap-4 w-[1/2]">
          Trợ giúp:
          <Link className="font-medium underline" to={"/"}>
            FAQ
          </Link>
          <Link className="font-medium underline" to={"/"}>
            Hướng dẫn
          </Link>
          <Link className="font-medium underline" to={"/"}>
            Giúp đỡ
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Banner;
