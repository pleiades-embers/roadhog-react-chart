import React, { PureComponent } from "react";
import Chart from "../../../utils/chart";
import { CityOverviewOption } from "./options";
import { sortBy } from "lodash";

const colorList = {
  "0": {
    color: "rgba(234,53,39,0.7)",
    borderColor: "rgba(234,53,39,1)",
  },
  "1": {
    color: "rgba(244,201,7,0.7)",
    borderColor: "rgba(244,201,7,1)",
  },
  "2": {
    color: "rgba(23,216,161,0.7)",
    borderColor: "rgba(23,216,161,1)",
  },
  "3": {
    color: "rgba(15,197,243,0.7)",
    borderColor: "rgba(15,197,243,1)",
  },
  "4": {
    color: "rgba(122,60,235,0.7)",
    borderColor: "rgba(122,60,235,1)",
  },
  "5": {
    color: "rgba(51,147,247,0.7)",
    borderColor: "rgba(51,147,247,1)",
  }
}
class CityOverview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: "canvas",
    };
  }

  getChartData() {
    const { data } = this.props;

    let chartData = [];

    const sortData = sortBy(data[0].subList, function (o) {
      return -Number(o.confirmed);
    });
    chartData = sortData.map((item, i) => {
      return {
        value: item.confirmed,
        name: item.area,
        ...(i <= 5 ? {
          label: {
            normal: {
              fontSize: 12,
              color: "#8d9397",
            }
          }}:{
            label:{
              show:true,
              normal:{
                show:false,
                position:'inside',
                fontSize: 8,
                align: "right",
                padding: 4,
                color: "#8d9397"
              }
            }
          }
    ),
      itemStyle: {
          ...colorList[i > 5 ? 5 : i],
        },
  };
});
return chartData;
  }

render() {
  const { renderer } = this.state;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Chart
        renderer={renderer}
        option={CityOverviewOption(this.getChartData())}
      />
    </div>
  );
}
}

export default CityOverview;
