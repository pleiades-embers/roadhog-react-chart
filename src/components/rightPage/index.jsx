import React, { PureComponent } from "react";
import { BorderBox8 } from "@jiaminghi/data-view-react";
import BrowseCategories from "./charts/BrowseCategories";
import UserIdentityCategory from "./charts/UserIdentityCategory";
import OfflinePortal from "./charts/OfflinePortal";
import Feedback from "./charts/Feedback";
import { ModuleTitle } from "../../style/globalStyledSet";
import DiagnosisTrend from "./charts/DiagnosisTrend"
import RealTimeState from "./charts/RealTimeState"
import RealTimeCity from "./charts/RealTimeCity"
import { connect } from "dva";
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
    const { offline, browseCategories, userIdentityCategory,realTimeState } = this.props;
    console.log(offline,"offline")
    return (
      <RightPage>
        <RightTopBox>
          <BorderBox8 reverse="{true}" className="borderBox8">
          <DiagnosisTrend/>
          </BorderBox8>
        </RightTopBox>

        <RightCenterBox>
          <BorderBox8 reverse="{true}" className="borderBox8">
            <RealTimeState realTimeState={realTimeState}></RealTimeState>
          </BorderBox8>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox8 reverse="{true}" className="borderBox8">
            <RealTimeCity></RealTimeCity>
          </BorderBox8>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    browseCategories: state.rightPage.browseCategories,
    userIdentityCategory: state.rightPage.userIdentityCategory,
    offline: state.rightPage.offline,
    realTimeState:state.rightPage.realTimeState
  };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
