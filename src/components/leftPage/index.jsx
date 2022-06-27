import React, { PureComponent } from 'react';
import { LeftPage, LeftTopBox, LeftCenterBox,LeftBottomBox } from './style';
import { ModuleTitle } from '../../style/globalStyledSet';
import { BorderBox8, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { userSitua, trafficSitua, accessFrequency, peakFlow } = this.props;
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <LeftTopBox>
          <BorderBox8 className='borderBox8'>

          </BorderBox8>
        </LeftTopBox>
        <LeftCenterBox>
          <BorderBox8 className='borderBox8'>

          </BorderBox8>
        </LeftCenterBox>

        {/* 底部图表 */}
        <LeftBottomBox>
          <BorderBox8 className='borderBox8'>

          </BorderBox8>
        </LeftBottomBox>
      </LeftPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessFrequency: state.leftPage.accessFrequency,
    peakFlow: state.leftPage.peakFlow,
    userSitua: state.leftPage.userSitua,
    trafficSitua: state.leftPage.trafficSitua,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
