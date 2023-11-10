import { CalendarFilled } from "@ant-design/icons";
import { dayInThePast } from "../utils/data";
import { Empty } from "antd";
import { Link } from "react-router-dom";

const DayInThePast: React.FC = () => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const data = dayInThePast.find(
    (item) => item.day == currentDay && item.month == currentMonth
  );

  return (
    <div className="w-full h-fit border shadow-lg p-2 bg-gradient-to-br from-pink-50 to-violet-200">
      <h1 className="font-semibold text-xl text-slate-50 h-8 bg-pink-500 rounded-t-lg">
        <CalendarFilled className="text-slate-50 bg-pink-500 h-8 rounded-tl-lg px-2 mr-2" />
        Ngày này năm xưa
      </h1>
      {data ? (
        <div className="p-4 h-64 bg-transparent">
          <p>
            <b>{data.day + " tháng " + (data.month + 1)}: </b>
            {data.whatDay.map((item) =>
              item.id === data.whatDay.length
                ? item.shortDesc + "."
                : item.shortDesc + ", "
            )}
            {data.events.map((item) => (
              <Link to={`/pages/${item.event}`}>
                <li>
                  <b>{item.year} :</b> {item.event}
                </li>
              </Link>
            ))}
          </p>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};
export default DayInThePast;
