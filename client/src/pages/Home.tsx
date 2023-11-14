import Banner from "../components/Banner";
import { lazy } from "react";
import FactCard from "../components/FactCard";
import DayInThePast from "../components/DayInThePast";
import GoodCard from "../components/GoodCard";
import Categories from "../components/Categories";
import Suggestions from "../components/Suggestions";
import { delayForDemo } from "../App";
const SelectedCard = lazy(() =>
  delayForDemo(import("../components/SelectedCard"))
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-row h-full">
      <div className=" w-36 h-full"></div>
      <div className="w-[80%] h-full">
        <Banner />
        <div className=" w-full grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col gap-4">
            <Suggestions />
            <SelectedCard />
            <Categories />
          </div>
          <div className="flex flex-col gap-4">
            <FactCard />
            <DayInThePast />
            <GoodCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
