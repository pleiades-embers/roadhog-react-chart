import React, { PureComponent, createRef } from "react";
import Chart from "../../../utils/chart";
import { mapOptions } from "./options";

/**
 * 1. 参考echarts 3d地图案例 https://www.makeapie.cn/echarts_content/x8qMIlaLpr.html
 * 2. 地图数据源 http://img.hcharts.cn/mapdata/  (无用)
 * 3. https://echarts.apache.org/zh/option-gl.html#series-map3D
 * 4. https://github.com/echarts-maps/echarts-countries-js  (数据源)
 */

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: "canvas",
    };
    this.chartRef = createRef(null);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(this.props.chartName!==nextProps.chartName){
      this.chartRef.current.chartClear()
    }

  }



  render() {
    const { renderer } = this.state;
    const { mapData, chartName ,tabName} = this.props;

    return (
      <div
        style={{
          width: "10.85rem",
          height: "6.95rem",
          marginBottom: "0.31rem",
        }}
      >
        {mapData[tabName] ? (
          <Chart
            ref={this.chartRef}
            renderer={renderer}
            option={mapOptions(mapData[tabName], chartName, {
              itemStyle: {
                opacity: 1, // 透明度
                borderWidth: 0.6, //分界线宽度
                borderColor: "#207fce", //分界线颜色
              },
            })}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Map;
