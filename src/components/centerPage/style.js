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
  width: 10.63rem;
  margin-left: 0.32rem;
  .arco-timeline{
    margin-top:10px;
    padding-left:10px;
    height: 2.80rem;
    overflow-y: auto;
    ::-webkit-scrollbar  
    {  
        width: 0.04rem;  
        background: #0A415B;
    } 
    ::-webkit-scrollbar-thumb   
    {  
      background: #6DE0EF;
      opacity: 0.42;
    }  
  }
  
  .arco-timeline-item {
    min-height: 30px;
  }
`