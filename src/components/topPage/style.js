import styled from 'styled-components';
import { TitleColor } from '../../style/color'
import header from '../../assets/header.png';

export const TopBox = styled.div`
  .top_box {
    display: flex;
    justify-content: center;
    position: relative;
    height: 101px;
    .top_decoration10 {
      position: relative;
      width: 11%;
      height: 0.0625rem;
    }
    .top_decoration10_left {
      left:-27%;
      top: 26.5px;
    }
    .top_decoration10_right {
      top:27px;
      right:-27%;
    }

    .top_decoration10_reverse {
      transform: rotateY(180deg);
    }
    .top_decoration6 {
      position: relative;
      width: 10%;
      height: 20px;
      top: 39px;
    }
    .top_decoration6_left {
      left: -28.8%;
    }
    .top_decoration6_right {
      right: -28.8%;

    }
    .top_decoration6_reverse {
      transform: rotateY(180deg);
    }
    .top_decoration10_sk_left {
      position: absolute;
      width: 4.5%;
      top: 6.5px;
      left: 8.3%;
      transform: rotate(-45deg);
    }
    .top_decoration10_sk_right{
      position: absolute;
      width: 4.5%;
      top: 7px;
      right: 8.3%;
      transform:rotateY(180deg) rotate(-45deg);
    }
    .top_decoration10_l {
      position: absolute;
      width: 9%;
      top: 33.5px;
      left: 0.1%;
    }
    .top_decoration10_r{
      position: absolute;
      width: 9%;
      top: 34px;
      right: 0.1%;
      transform:rotateY(180deg);
    }

    .title-box{
      font-size: 12px;
      background: url(${header}) no-repeat;
      width: 943px;
      height: 101px;
      display: grid;
      place-items: center;
      position: absolute;

    } // end title-box
  } // end top_box
`;

export const TimeBox = styled.div`
  position: absolute;
  right: 0.375rem;
  top: 0.5rem;
  text-align: right;
  color: #fff;
  h3{
    font-size: 0.225rem;
    color: ${TitleColor};
  }
`;
