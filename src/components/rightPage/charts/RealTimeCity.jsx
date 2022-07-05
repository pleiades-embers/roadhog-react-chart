import React, { PureComponent } from 'react';
import { AreaScrollBoardOptions } from './options';
import { ScrollBoard } from '@jiaminghi/data-view-react';

class RealTimeCity extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: '#102c37',
        // 宽度
        columnWidth: [260, 200, 200,200],

        // 表行数
        rowNum: 5,
      },
    };
  }

  render() {
    const config = {
      ...this.state.config,
      ...AreaScrollBoardOptions({
        header: ['首府/最大城市', '累计确诊', '治愈', '死亡'],
        data: [
          ['波士顿', '1473752', '1404983','20643'],
          ['洛杉矶', '6325806', '5967132','74886'],
          ['博伊西', '7014739', '6769446','88926'],
          ['华盛顿', '5681025', '5542992','89898'],
          ['芝加哥', '2960677', '2851863','89898'],
          ['田纳西', '89898', '89898','89898'],
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

export default RealTimeCity;
