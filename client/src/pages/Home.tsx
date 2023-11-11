import { BookFilled } from "@ant-design/icons";
import Banner from "../components/Banner";
import SelectedCard from "../components/SelectedCard";
import FactCard from "../components/FactCard";
import DayInThePast from "../components/DayInThePast";
import GoodCard from "../components/GoodCard";
import Categories from "../components/Categories";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row h-full">
      <div className=" w-36 h-full"></div>
      <div className="w-[80%] h-full">
        <Banner />
        <div className=" w-full grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col gap-4">
            <SelectedCard />
            <GoodCard />
          </div>
          <div className="flex flex-col gap-4">
            <FactCard />
            <DayInThePast />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
