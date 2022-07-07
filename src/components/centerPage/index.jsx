import React, { PureComponent } from 'react';
import { CenterPage, CenterBottom } from './style';
import Map from './charts/Map';
import CenterTab from "./CenterTab/index"
import { BorderBox8 } from "@jiaminghi/data-view-react";
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chartName:"America"
    };
  }



  render() {
    const { detailsList, mapData,tabName, getArea,dispatch } = this.props;
    if(!mapData){
      return null
    }
    const {chartName}=this.state;
    return (
      <CenterPage>
        <CenterTab onClick={(v)=>{
          this.setState({
            chartName:v
          })
          const enumCountry={
              ap:"ap",
              Asia:"pr",
              America:"usa"
          }
          dispatch({
            type: 'centerPage/getCenterPageData',
            payload:enumCountry[v]
          });
    
        }}></CenterTab>
        <Map mapData={mapData} tabName={tabName} chartName={chartName}></Map>
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
    tabName:state.centerPage.tabName
  };
};


export default connect(mapStateToProps)(index);
