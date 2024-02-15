import styled from 'styled-components'

export const FilterButtonList = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  gap: 32px;
`
export const ListEl = styled.div`
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
}
  
  
`
export const FilterButton = styled.div`
  width: 140px; 
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &.activeButton {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
}
`
