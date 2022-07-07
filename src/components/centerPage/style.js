import styled from 'styled-components';

export const CenterPage = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:11rem;
  margin-left:0.38rem;
`;




export const CenterBottom = styled.div`
  display: flex;
  width: 11rem;
  justify-content: center;
  height: 3.63rem;

`;


export const TimeLineItemStyle=styled.div`
  display: grid;
  grid-template-columns: 1.42rem 1fr;
  grid-template-rows: 1fr;
  column-gap:0.36rem;
  >div{
    font-size: 0.22rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
  }
`

export const TimeLineStyle=styled.div`
  height: 3.04rem;
  overflow-y: scroll;
  width: 10.63rem;
  margin-left: 0.32rem;
  ::-webkit-scrollbar  
  {  
      width: 0.04rem;  
      height: 0.04rem;  
      background-color: rgba(109, 224, 239, 1);  
  }  
  .arco-timeline{
    margin-top:10px;
    margin-left:10px;
  }
  .arco-timeline-item {
    min-height: 30px;
  }
`