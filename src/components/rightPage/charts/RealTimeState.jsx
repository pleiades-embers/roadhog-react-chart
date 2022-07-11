import React, { PureComponent } from 'react';
import { AreaScrollBoardOptions } from './options';
import { ScrollBoard } from '@jiaminghi/data-view-react';

class RealTimeState extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: 'rgba(60, 158, 179, 0.14)',
        // 宽度
        columnWidth: [200, 200, 200, 200],

        // 表行数
        rowNum: 5,
      },
    };
  }

  render() {
    const { data } = this.props
    const config = {
      ...this.state.config,
      ...AreaScrollBoardOptions({
        header: ['<span style="color:#6DE0EF;">州<span>', '<span style="color:#6DE0EF;">累计确诊<span>', '<span style="color:#6DE0EF;">治愈<span>', '<span style="color:#6DE0EF;">死亡<span>'],
        data: data.map(item => {
          return [item.area, item.confirmed, item.recovered, item.deaths]
        }),
      }, ),
    };

    return (
      <div>
        <ScrollBoard
          config={config}
          style={{
            width: '5.65rem',
            height: '2.93rem',
            marginTop: '0.1rem',
          }}></ScrollBoard>
      </div>
    );
  }
}

export default RealTimeState;
