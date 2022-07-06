import React, { PureComponent } from 'react';
import { LeftPage, LeftTopBox, LeftCenterBox,LeftBottomBox } from './style';
import { ModuleTitle } from '../../style/globalStyledSet';
import { BorderBox8, BorderBox13 } from '@jiaminghi/data-view-react';
import CityOverview from "./charts/CityOverview"
import InfectiousDisease from "./charts/InfectiousDisease"
import { connect } from 'dva';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <LeftPage>
        {/* 顶部图表 */}
        <LeftTopBox>
          <BorderBox8 className='borderBox8'>
                


          </BorderBox8>
        </LeftTopBox>
        <LeftCenterBox>
          <BorderBox8 className='borderBox8'>
            <CityOverview/>
          </BorderBox8>
        </LeftCenterBox>

        <LeftBottomBox>
          <BorderBox8 className='borderBox8'>
            <InfectiousDisease/>
          </BorderBox8>
        </LeftBottomBox>
      </LeftPage>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
