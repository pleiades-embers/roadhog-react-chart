import React, { PureComponent } from "react";
import { AreaScrollBoardOptions } from "./options";
import { ScrollBoard } from "@jiaminghi/data-view-react";

class RealTimeCity extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: 'rgba(60, 158, 179, 0.14)',
        // 宽度
        columnWidth: [260, 200, 200, 200],

        // 表行数
        rowNum: 5,
      },
    };
  }

  render() {
    const { data ,title="首府/最大城市",fields=["stateNameCn", "cumulativeConfirmed", "cumulativeCures", "cumulativeDeaths"]} = this.props;
    const config = {
      ...this.state.config,
      ...AreaScrollBoardOptions({
        header: [`<span style="color:#6DE0EF;">${title}<span>`, '<span style="color:#6DE0EF;">累计确诊<span>', '<span style="color:#6DE0EF;">治愈<span>', '<span style="color:#6DE0EF;">死亡<span>'],
        data: data.map((item) => {
          return fields.map(item2=>item[item2]);
        }),
      }),
    };

    return (
      <div>
        <ScrollBoard
          config={config}
          style={{
            width: "5.65rem",
            height: "2.93rem",
            marginTop: "0.1rem",
          }}
        ></ScrollBoard>
      </div>
    );
  }
}

export default RealTimeCity;
