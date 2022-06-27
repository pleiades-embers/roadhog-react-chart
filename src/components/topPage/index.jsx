import React, { PureComponent, Fragment } from 'react';
import { formatTime } from '../../utils';
import {
  Decoration10,
  Decoration6,
} from '@jiaminghi/data-view-react';

import { TopBox, TimeBox } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timeStr: '',
      weekday: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
    };
  }

  // 设置时间
  componentDidMount() {
    this.setTimingFn();
  }

  setTimingFn() {
    this.timing = setInterval(() => {
      let dateYear = formatTime(new Date(), 'yyyy-MM-dd');
      let dateDay = formatTime(new Date(), 'HH: mm: ss');
      let dateWeek = this.state.weekday[new Date().getDay()];
      this.setState({
        timeStr: `${dateYear} | ${dateDay} ${dateWeek}`,
      });
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
          <Decoration6  className='top_decoration6 top_decoration6_left' />  
            <Decoration10 className='top_decoration10 top_decoration10_left' />
            <Decoration10 className='top_decoration10_sk_left' />
            <Decoration10 className='top_decoration10_l' />
            <div className='title-box'></div>
            {/* <Decoration10 className='top_decoration10_sk' /> */}
            <Decoration10 className='top_decoration10 top_decoration10_right top_decoration10_reverse' />
            <Decoration6  className='top_decoration6 top_decoration6_right top_decoration6_reverse' />  
            <Decoration10 className='top_decoration10_sk_right' />
            <Decoration10 className='top_decoration10_r' />
            {/* <TimeBox>
              <h3>{this.state.timeStr}</h3>
            </TimeBox> */}
          </div>
        </TopBox>
      </Fragment>
    );
  }
}

export default index;
