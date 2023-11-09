import { CalendarFilled } from "@ant-design/icons";
import { dayInThePast } from "../utils/data";

const DayInThePast: React.FC = () => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const data = dayInThePast.filter(
    (item) => item.day == currentDay && item.month == currentMonth
  );
  console.log(data);

  return (
    <div className="w-full h-fit  border shadow-lg p-2">
      <h1 className="font-semibold text-xl h-8 bg-slate-100 rounded-t-lg">
        <CalendarFilled className="text-red-600 bg-slate-300 h-8 rounded-tl-lg px-2 mr-2" />
        Ngày này năm xưa
      </h1>
    </div>
  );
};
export default DayInThePast;
