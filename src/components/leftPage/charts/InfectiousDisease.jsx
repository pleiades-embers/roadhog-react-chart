import React, { PureComponent } from "react";
import Chart from "../../../utils/chart";
import { InfectiousDiseaseOption } from "./options";

class InfectiousDisease extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: "canvas",
      data: [],
    };
  }

  render() {
    const { renderer, data } = this.state;
    return (
      <div
        style={{
          width:"100%",
          height: "100%",
        }}
      >
        <Chart renderer={renderer} option={InfectiousDiseaseOption(data)} />
      </div>
    );
  }
}

export default InfectiousDisease;
