import React, { PureComponent } from 'react';
import { CenterPage, CenterBottom,CenterTab } from './style';
import Map from './charts/Map';
import { BorderBox8 } from "@jiaminghi/data-view-react";
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detailsList, mapData } = this.props;
    return (
      <CenterPage>
        <CenterTab></CenterTab>
        <Map mapData={mapData}></Map>
        <CenterBottom>
        <BorderBox8  className="borderBox8">
      
        </BorderBox8>
        </CenterBottom>
      </CenterPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailsList: state.centerPage.detailsList,
    mapData: state.centerPage.mapData,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
