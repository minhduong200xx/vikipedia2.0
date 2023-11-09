import { QuestionCircleFilled } from "@ant-design/icons";
import { fact } from "../utils/data";
import { Link } from "react-router-dom";

const FactCard: React.FC = () => {
  return (
    <div>
      <div className="w-full h-fit border shadow-lg p-2">
        <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
          <QuestionCircleFilled className="text-green-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
          Bạn có biết
        </h1>
        {fact.map((item) => (
          <Link to={`/pages/${item.keyword}`}>
            <li key={item.id}>...{item.desc}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FactCard;
