import styled from "styled-components";

export const CenterTabStyle = styled.div`
  width: 10.25rem;
  height: 0.38rem;
  margin-bottom: 0.11rem;
  display: grid;
  grid-template-columns: repeat(3, 1.06rem);
  grid-template-rows: 0.38rem;
  column-gap: 0.2rem;
  position: relative;
  place-content:end;
  place-items:center;
  > div {
    display:flex;
    justify-content:center;
    img{
        position: absolute;
        top: 0;
    }
    >div{
        color: #fff;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #6DE0EF;
        font-size: 0.18rem;
    }
  }
`;
