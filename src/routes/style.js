import styled from 'styled-components';
import pageBg from '../assets/pageBg.png';

export const IndexPageStyle = styled.div`
  position: relative;
  margin: 0px;
  height:100%;
  background: url(${pageBg}) center center no-repeat;
  background-size: cover;
`;
export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .center-page {
    flex: 1;
  }
`;
