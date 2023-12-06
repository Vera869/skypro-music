import  styled  from 'styled-components'

export const FilterButtonList = styled.div`
   display: flex;
   flex-direction: column;
   position: relative
`
export const ListEl = styled.div`
&:hover {
   border-color: #d9b6ff;
   color: #d9b6ff;
   cursor: pointer;
 }
`
export const List = styled.ul`
      position: absolute;
      display: flex;
      flex-direction: column;
      row-gap: 3px;
      width: 140px;
      // height: 100px;
      background-color: #383838;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      border: 1px solid #ffffff;
      border-radius: 10px;
      padding: 5px;
      &::-webkit-scrollbar:vertical{
         overflow:scroll;
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
&:not(:last-child) {
   margin-right: 10px;
 }
`