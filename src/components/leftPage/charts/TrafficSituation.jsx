import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { trafficOptions } from './options';

class TrafficSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    return (
      <div>
          <Chart renderer={renderer} option={trafficOptions(trafficSitua)} />
      </div>
    );
  } 
}

export default TrafficSituation;

