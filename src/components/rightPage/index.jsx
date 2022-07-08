import React, { PureComponent } from "react";
import { BorderBox8 } from "@jiaminghi/data-view-react";
import DiagnosisTrend from "./charts/DiagnosisTrend"
import RealTimeState from "./charts/RealTimeState"
import RealTimeCity from "./charts/RealTimeCity"
import { connect } from "dva";
import TitleBox from "../TitleBox/index"
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from "./style";

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {data,mapData} = this.props;

    return (
      <RightPage>
        <RightTopBox>
          <BorderBox8 reverse="{true}" className="borderBox8">
            <TitleBox title="新增确诊趋势"></TitleBox>
            {
              mapData&&  <DiagnosisTrend data={mapData["usa"][0].sevenDatas} />
            }
          </BorderBox8>
        </RightTopBox>

        <RightCenterBox>
          <BorderBox8 reverse="{true}" className="borderBox8">
            <TitleBox title="实时各州数据概况"></TitleBox>
            {
              data&&(<RealTimeState data={data}></RealTimeState>)
            }
          </BorderBox8>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox8 reverse="{true}" className="borderBox8">
          <TitleBox title="实时首府及最大城市概况"></TitleBox>
          {
              data&&(<RealTimeCity data={data}></RealTimeCity>)
            }
          </BorderBox8>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.rightPage.data,
    mapData: state.centerPage.mapData,
  };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
