import styled from 'styled-components'

export const CenterBlockFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const FilterButtonList = styled.div`
  display: flex;
  //position: relative;
  flex-direction: row;
  align-items: center;
  gap:  32px;
`
export const FilterButtonBlock = styled.div`
  // display: flex;
  // position: relative;
  // //position: absolute;
  // flex-direction: column;
  // align-items: center;

  //z-index: 1;
  //position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ListEl = styled.div` //#ad61ff;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  &.activeListEl {
      border-color: #ad61ff;
      color: #ad61ff;
      cursor: pointer;
  }
  }
`
export const List = styled.ul`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 180px;
  height: 140px;
  background-color: #383838;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 5px;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto; 
  scrollbar-width: none;
  margin-top: 50px;
`
export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  width: 170px; 
  text-align: center;
  position: relative;
`
export const clearFilteredButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  border-color: #d9b6ff

  // &:hover {
  //   border-color: #d9b6ff;
  //   color: #d9b6ff;
  //   cursor: pointer;
  // }
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  &:active {
    border-color: #d9b6ff;
    color:#d9b6ff;
    cursor: pointer;
  }
`;
export const filterCountAuthor = styled.div`
  position: absolute;
  top: 227px;
  left: 590px;
  border: 1px solid #d9b6ff;
  border-radius: 50%;
  background: #8215f9;
  width: 25px;
  height: 25px;
  text-align: center;
  opacity: 1;
  z-index: 1;
  color: #d9b6ff;
`;
export const filterCountGenre = styled.div`
  position: absolute;
  top: 230px;
  left: 790px;
  // top: -14px;
  // left: 240px;
  border: 1px solid #d9b6ff;
  border-radius: 50%;
  background: #8215f9;
  width: 25px;
  height: 25px;
  text-align: center;
  opacity: 1;
  z-index: 1;
  color: #d9b6ff;
`;
export const filterCountYears = styled.div`
  position: absolute;
  top: -14px;
  top: 229px;
  right: 863px;
  //right: 200px;
  // left: 240px;
  border: 1px solid #d9b6ff;
  border-radius: 50%;
  background: #8215f9;
  width: 25px;
  height: 25px;
  text-align: center;
  opacity: 1;
  z-index: 1;
  color: #d9b6ff;
`;