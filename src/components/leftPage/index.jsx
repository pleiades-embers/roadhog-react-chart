import React, { PureComponent } from "react";
import { LeftPage, LeftTopBox, LeftCenterBox, LeftBottomBox } from "./style";
import {
  BorderBox8,
} from "@jiaminghi/data-view-react";
import CityOverview from "./charts/CityOverview";
import InfectiousDisease from "./charts/InfectiousDisease";
import TitleBox from "../../components/TitleBox/index"
import RealTimeCity from "../rightPage/charts/RealTimeCity"
import { sortBy } from "lodash"
import { connect } from "dva";

const images = [
  { icon: "confirmed", text: "累计确诊人数" },
  { icon: "curConfirm", text: "现有确诊人数" },
  { icon: "deaths", text: "死亡人数" },
  { icon: "recovered", text: "治愈人数" },
];

function formatter(number) {
  const numbers = number.toString().split("").reverse();
  const segs = [];

  while (numbers.length) segs.push(numbers.splice(0, 3).join(""));

  return segs.join(",").split("").reverse().join("");
}
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }

  UNSAFE_componentWillReceiveProps(prevProps) {

    const { mapData, tabName,countryName } = prevProps;
    if (!mapData) {
      return null
    }
    if (mapData && tabName == "usa") {
      const { confirmed, curConfirm, deaths, recovered } = mapData["usa"][0];
      this.setState({
        arr: [confirmed, curConfirm, deaths, recovered]
      })
    } else if ("pr" in mapData && tabName == "pr") {
      const { confirmed, curConfirm, deaths, recovered } = countryName?mapData["pr"].some(item=>{return item.areaEn===countryName})?mapData["pr"].find(item=>{return item.areaEn===countryName}):{confirmed:0, curConfirm:0, deaths:0, recovered:0}:sortBy(mapData["pr"].filter(item=>item.area!=="美国"), function (o) { return -Number(o.confirmed) })[0];
      this.setState({
        arr: [confirmed, curConfirm, deaths, recovered]
      })
    } else if ("ap" in mapData && tabName == "ap") {
      const { confirmed, curConfirm, deaths, recovered } = sortBy(mapData["ap"], function (o) { return -Number(o.confirmed) })[0];
      this.setState({
        arr: [confirmed, curConfirm, deaths, recovered]
      })
    }
  }

  render() {
    const { mapData, rankData, data,tabName ,data2} = this.props;
    if (!mapData) {
      return null
    }
    const { arr } = this.state;
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <LeftTopBox>
          <BorderBox8 className="borderBox8" dur="0">
            <div className="left-top">
              <TitleBox title="疫情动态总览"></TitleBox>

              <div className="border"></div>
              <div className="border-reverse"></div>
              <div className="grid">
                {arr.length > 0 &&
                  images.map((item, i) => {
                    return (
                      <div className="grid-item">
                        <img
                          src={require(`../../assets/imgs/${item.icon}.png`)}
                        ></img>
                        <div className="grid-item__text">{item.text}</div>
                        <div className="grid-item__number">{formatter(arr[i])}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </BorderBox8>
        </LeftTopBox>
        <LeftCenterBox>
          <BorderBox8 className="borderBox8" dur="0">


            {tabName === "usa" ? (<div className="left-center">
              <TitleBox title="美国城市疫情概况"></TitleBox>
              {
                data && data.length > 0 && (<CityOverview data={data} />)
              }
            </div>) : (<>
              <TitleBox title="环太城市疫情概况"></TitleBox>
              {
                data2 && (<CityOverview data={data2} tooltipName="cityNameCn" />)
              }
            </>)}
          </BorderBox8>
        </LeftCenterBox>

        <LeftBottomBox>
          <BorderBox8 className="borderBox8" dur="0">
            <TitleBox title="Top5传染病"></TitleBox>
            {
              rankData && rankData.length > 0 && (<InfectiousDisease data={rankData} />)
            }
          </BorderBox8>
        </LeftBottomBox>
      </LeftPage >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapData: state.centerPage.mapData,
    rankData: state.centerPage.rankData,
    tabName: state.centerPage.tabName,
    data: state.rightPage.data,
    data2: state.rightPage.data2,
    countryName: state.leftPage.countryName
  };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
