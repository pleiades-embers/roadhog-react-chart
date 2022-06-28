import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { mapOptions } from './options';


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
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { mapData } = this.props;
    return (
      <div
        style={{
          width: '10.85rem',
          height: '6.95rem',
        }}>
     <Chart renderer={renderer} option={mapOptions(mapData)} />:''
      </div>
    );
  }
}

export default Map;
