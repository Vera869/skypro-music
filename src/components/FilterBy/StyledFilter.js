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
  position: relative;
  flex-direction: row;
  align-items: center;
  gap:  32px;
`
export const ListEl = styled.div`

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
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
`
export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  // &:not(:last-child) {
  //    margin-right: 10px;
  //  }
//   width: 140px; 
//   height: 36px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid #ffffff;
//   border-radius: 60px;
//   padding: 6px 20px;
//   &.activeButton {
//     border-color: #ad61ff;
//     color: #ad61ff;
//     cursor: pointer;
// }
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
  border-color: ${(props) => props.theme.borderColorButton};

  &:hover {
    border-color: ${(props) => props.theme.borderColorButton};
    color: ${(props) => props.theme.colorBtnHover};
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:active {
    // border-color: ${(props) => props.theme.borderColorButton};
    // color: ${(props) => props.theme.colorBtnHover};
    cursor: pointer;
  }
`;
export const filterCountAuthor = styled.div`
  position: absolute;
  top: -14px;
  left: 210px;
  border: 1px solid #d9b6ff;
  border-radius: 50%;
  background: #8215f9;
  width: 25px;
  height: 25px;
  text-align: center;
  opacity: 1;
  z-index: 1;
  // color: ${(props) => props.theme.colorCount};
`;
export const filterCountGenre = styled.div`
  position: absolute;
  top: -14px;
  left: 310px;
  border: 1px solid #d9b6ff;
  border-radius: 50%;
  background: #8215f9;
  width: 25px;
  height: 25px;
  text-align: center;
  opacity: 1;
  z-index: 1;
  // color: ${(props) => props.theme.colorCount};
`;
export const filterCountYears = styled.div`
  position: absolute;
  top: -14px;
  right: 0px;
  border: 1px solid #d9b6ff;
  border-radius: 50%;
  background: #8215f9;
  width: 25px;
  height: 25px;
  text-align: center;
  opacity: 1;
  z-index: 1;
  // color: ${(props) => props.theme.colorCount};
`;