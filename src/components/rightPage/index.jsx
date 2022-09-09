import React, { PureComponent } from "react";
import { BorderBox8 } from "@jiaminghi/data-view-react";
import DiagnosisTrend from "./charts/DiagnosisTrend"
import RealTimeState from "./charts/RealTimeState"
import RealTimeCity from "./charts/RealTimeCity"
import RealTimeAr from "./charts/RealTimeAr"
import { connect } from "dva";
import TitleBox from "../TitleBox/index"
import {sortBy} from "lodash"
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from "./style";

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null
    };
  }
  UNSAFE_componentWillReceiveProps(prevProps) {
    
    const { mapData ,tabName} = prevProps;

    if(!mapData){
      return null
    }
    if (mapData && tabName==="usa") {
      this.setState({
        chartData: mapData["usa"][0].sevenDatas
      })
    }else if("pr" in mapData && tabName==="pr"){
     ;
      this.setState({
        chartData:sortBy(mapData["pr"].filter(item=>item.area!=="美国"), function(o) { return -Number(o.confirmed) })[0].sevenDatas
      })
    }else if("ap" in mapData && tabName==="ap"){
      this.setState({
        chartData: sortBy(mapData["ap"], function(o) { return -Number(o.confirmed) })[0].sevenDatas
      })
    }
  }
  render() {
    const {data,mapData,tabName,data2} = this.props;
    const {chartData}=this.state
    return (
      <RightPage>
        <RightTopBox>
          <BorderBox8 reverse="{true}" className="borderBox8" dur="0">
            <TitleBox title="新增确诊趋势"></TitleBox>
            {
              chartData&&<DiagnosisTrend data={chartData} />
            }
          </BorderBox8>
        </RightTopBox>

        <RightCenterBox>
          <BorderBox8 reverse="{true}" className="borderBox8" dur="0">
            {tabName==="usa"?(       <>
            <TitleBox title="美国实时各州数据概况"></TitleBox>
            {
              mapData&&(<RealTimeState data={mapData["usa"][0].subList}></RealTimeState>)
            }
            </>):(  <>
            <TitleBox title="环太实时各国数据"></TitleBox>
            {
              mapData["pr"]?.length>0&&(<RealTimeCity data={mapData["pr"]} title="国家" fields={["area", "confirmed", "recovered", "deaths"]} ></RealTimeCity>)
            }
            </>)}
      
          </BorderBox8>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox8 reverse="{true}" className="borderBox8" dur="0">
          {tabName==="usa"?(<>
            <TitleBox title="美国实时首府及最大城市概况"></TitleBox>
            {
              data&&(<RealTimeCity data={data}></RealTimeCity>)
            }</>):(  <>
            <TitleBox title="环太实时首府"></TitleBox>
            {
              data2&&(<RealTimeCity data={data2} title="首府" fields={["cityNameCn", "cumulativeConfirmed", "cumulativeCures", "cumulativeDeaths"]}></RealTimeCity>)
            }
            </>)}
       
          </BorderBox8>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.rightPage.data,
    data2: state.rightPage.data2,
    mapData: state.centerPage.mapData,
    tabName: state.centerPage.tabName,
  };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
