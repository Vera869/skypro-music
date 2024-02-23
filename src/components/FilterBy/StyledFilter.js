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
  flex-direction: column;
  position: relative;
  flex-direction: row;
  position: relative;
  align-items: center;
  gap: 10px;
`
export const ListEl = styled.div`

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`
export const List = styled.ul`
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 140px;
  height: 100px;
  background-color: #383838;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 5px;
  z-index: 1;
  &::-webkit-scrollbar:vertical {
    overflow: scroll;
    color: #d9b6ff;
  }
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