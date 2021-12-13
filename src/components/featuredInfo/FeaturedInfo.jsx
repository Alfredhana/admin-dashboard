import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">盈利</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$989</span>
          <span className="featuredMoneyRate">
            -11
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">與上週對比</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">售出</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1411</span>
          <span className="featuredMoneyRate">
            -100
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">與上週對比</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">成本</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$522</span>
          <span className="featuredMoneyRate">
            +22
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">與上週對比</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
