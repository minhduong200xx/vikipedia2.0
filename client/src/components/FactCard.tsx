import { QuestionCircleFilled } from "@ant-design/icons";
import { fact } from "../utils/data";
import { Link } from "react-router-dom";

const FactCard: React.FC = () => {
  return (
    <div>
      <div className="w-full h-fit border shadow-lg p-2 bg-gradient-to-br from-green-100 to-blue-200 rounded">
        <h1 className="font-semibold text-xl text-slate-50  h-8 bg-blue-500 rounded-t-lg">
          <QuestionCircleFilled className="text-slate-50 bg-blue-500 h-8 rounded-tl-lg px-2 mr-2" />
          Bạn có biết
        </h1>
        <span className="font-medium text-base">
          {fact.map((item) => (
            <Link to={`/pages/${item.keyword}`}>
              <li
                className="hover:underline hover:text-black px-4"
                key={item.id}
              >
                ...{item.desc}
              </li>
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};
export default FactCard;
