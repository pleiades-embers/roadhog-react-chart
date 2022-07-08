import React, { PureComponent } from "react";
import { CenterPage, CenterBottom, TimeLineItemStyle,TimeLineStyle } from "./style";
import Map from "./charts/Map";
import CenterTab from "./CenterTab/index";
import { BorderBox8 } from "@jiaminghi/data-view-react";
import { connect } from "dva";
import TitleBox from "../TitleBox/index";
import { Timeline } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
const TimelineItem = Timeline.Item;
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartName: "America",
    };
  }

  render() {
    const { mapData, dispatch, tabName, message } =
      this.props;
    if (!mapData) {
      return null;
    }

    const { chartName } = this.state;
    return (
      <CenterPage>
        <CenterTab
          onClick={(v) => {
            this.setState({
              chartName: v,
            });
            const enumCountry = {
              ap: "ap",
              Asia: "pr",
              America: "usa",
            };
            dispatch({
              type: "centerPage/getCenterPageData",
              payload: enumCountry[v],
            });
          }}
        ></CenterTab>
        <Map mapData={mapData} tabName={tabName} chartName={chartName}></Map>
        <CenterBottom>
          <BorderBox8 className="borderBox8">
            <TitleBox big={"big"} title="传染病风险预警"></TitleBox>
            <TimeLineStyle>
            <Timeline>
              {message &&
            message.map((item, index) => {
                  return (
                    <TimelineItem

                      key={item.id}
                      dot={
                        <img
                          src={require(`../../assets/imgs/dot.png`)}
                          className="dot"
                          style={{
                            backgroundColor:"#0b1520"
                          }}
                        />
                      }
                    >
                      <TimeLineItemStyle>
                        <div>{item.date}</div>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></div>
                      </TimeLineItemStyle>
                    </TimelineItem>
                  );
                })}
            </Timeline>
            </TimeLineStyle>
          </BorderBox8>
        </CenterBottom>
      </CenterPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailsList: state.centerPage.detailsList,
    mapData: state.centerPage.mapData,
    tabName: state.centerPage.tabName,
    message: state.centerPage.message,
  };
};

export default connect(mapStateToProps)(index);
