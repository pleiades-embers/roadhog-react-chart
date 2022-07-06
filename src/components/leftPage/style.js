import styled from "styled-components";

export const LeftPage = styled.div`
  width: 6.01rem;
  height: auto;
  padding-left: 0.38rem;
  box-sizing: border-box;
`;


export const LeftTopBox = styled.div`
  position: relative;
  width: 6.01rem;
  height: 3.63rem;
  margin-top: 0.25rem;
  .borderBox8 {
    width: inherit;
    height: inherit;
    padding: 0.13rem;
    .left-top {
      .border {
        position: absolute;
        width: 0.01rem;
        height: 2.29rem;
        background: #5bc8fa;
        opacity: 0.16;
        left: 2.71rem;
        top: 0.7rem;
      }
      .border-reverse {
        position: absolute;
        width: 4.99rem;
        height: 0.01rem;
        background: #5bc8fa;
        opacity: 0.16;
        top: 1.88rem;
        left: 0.4rem;
      }
      .grid {
        width: 4.99rem;
        height: 2.29rem;
        margin-top: 0.36rem;
        margin-left: 0.24rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        place-items: center start;
        row-gap: 0.4rem;
        .grid-item {
          display: grid;
          grid-template-columns: 0.5rem 1fr;
          grid-template-rows: repeat(2, 1fr);
          grid-template-areas: "a b" "a c";
          column-gap: 0.14rem;
          row-gap: 0.18rem;
          place-self: center start;
          padding-left: 0.14rem;
          > img {
            grid-area: a;
            grid-self: center end;
          }
        }
        .grid-item:nth-child(3) {
          padding-left: 0.16rem;
        }
        .grid-item:nth-child(2) {
          padding-left: 0.7rem;
        }
        .grid-item:nth-child(4) {
          padding-left: 0.76rem;
        }

        .grid-item__text {
          grid-area: b;
          font-size: 0.18rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: #6de0ef;
          opacity: 0.8;
          white-space: nowrap;
        }
        .grid-item__number {
          color: #ed702d;
          fontfamily: PangMenZhengDao;
          font-size: 0.23rem;
          font-weight: 500;
        }
      }
    }
  }
`;
export const LeftCenterBox = styled.div`
  position: relative;
  width: 6.01rem;
  height: 3.63rem;
  margin-top: 0.25rem;
  .borderBox8 {
    width: inherit;
    height: inherit;
    padding: 0.13rem;
    .left-center {
      width: 100%;
      height: 100%;
    }
  }
`;

export const LeftBottomBox = styled.div`
  position: relative;
  width: 6.01rem;
  height: 3.63rem;
  margin-top: 0.25rem;
  margin-bottom: 0.31rem;
  .borderBox8 {
    width: inherit;
    height: inherit;
    padding: 0.13rem;
    .left-top {
      width: 100%;
      height: 100%;
    }
  }
`;
