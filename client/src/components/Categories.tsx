import { ReadFilled } from "@ant-design/icons";
import { categories } from "../utils/data";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
  return (
    <div>
      <div className="w-full h-fit border shadow-lg p-2 bg-gradient-to-br from-green-100 to-blue-200 rounded">
        <h1 className="font-semibold text-xl text-slate-50  h-8 bg-blue-500 rounded-t-lg">
          <ReadFilled className="text-slate-50 bg-blue-500 h-8 rounded-tl-lg px-2 mr-2" />
          Các lĩnh vực
        </h1>
        <span className="font-medium text-base">
          {categories.map((item) => (
            <div className="p-4">
              <Link to={`#`}>
                <b>{item.name}</b>
              </Link>
              <ul className="grid grid-cols-2 list-disc pl-8">
                {item.children.map((i) => (
                  <Link to={"#"}>
                    <li
                      className="hover:underline hover:text-black px-4 w-fit"
                      key={i}
                    >
                      {i}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};
export default Categories;
