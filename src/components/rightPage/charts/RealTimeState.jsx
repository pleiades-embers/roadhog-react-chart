import React, { PureComponent } from 'react';
import { AreaScrollBoardOptions } from './options';
import { ScrollBoard } from '@jiaminghi/data-view-react';

class RealTimeState extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: '#102c37',
        // 宽度
        columnWidth: [200, 200, 200,200],

        // 表行数
        rowNum: 5,
      },
    };
  }

  render() {
    const config = {
      ...this.state.config,
      ...AreaScrollBoardOptions({
        header: ['州', '累计确诊', '治愈', '死亡'],
        data: [
          ['密苏里州', '1473752', '1404983','20643'],
          ['弗罗里达州', '6325806', '5967132','89898'],
          ['俄亥俄州', '7014739', '679446','88926'],
          ['华盛顿州', '5681025', '5542992','89898'],
          ['加利福尼亚州', '2960677', '2851863','89898'],
          ['田纳西州', '89898', '89898','89898'],
          ['佛罗里达州', '89898', '89898','89898'],
          ['纽约州', '89898', '89898','89898'],
        ],
      },),
    };

    return (
      <div>
            <ScrollBoard
            config={config}
            style={{
              width: '5.65rem',
              height: '2.93rem',
              marginTop: '0.4rem',
            }}></ScrollBoard>
      </div>
    );
  }
}

export default RealTimeState;
