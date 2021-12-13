import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../../data";
import Widget from "../../widget/Widget";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title={"銷售分析"} grid dataKey={"盈利"} />
      <div className="homeWidget">
        <Widget />
      </div>
    </div>
  );
}
