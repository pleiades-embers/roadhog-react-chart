import React, { PureComponent } from "react";
import Chart from "../../../utils/chart";
import { InfectiousDiseaseOption } from "./options";

class InfectiousDisease extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: "canvas",
    };
  }


  getChartData(){
    const {data}=this.props
    
    let value = [];
    let indicator=[]
    value=data.map(item=>{
        return item.reportNum
    })

    indicator=data.map(item=>{
        return {
            name:item.diseaseNameCn,
            max:100
        }
    })



    return {value,indicator}
  }


  render() {
    const { renderer } = this.state;

    return (
      <div
        style={{
          width:"100%",
          height: "90%",
        }}
      >
        <Chart renderer={renderer} option={InfectiousDiseaseOption(this.getChartData())} />
      </div>
    );
  }
}

export default InfectiousDisease;
