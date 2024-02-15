import * as S from '../FilterBy/StyledFilter.js'

export const CriterionButton = ({ criterion, isActive, onClick }) => {
  return (
    <S.FilterButton
      // className="_btn-text"
      className={isActive ? 'activeButton' : '_btn-text '}
      onClick={onClick}
    >
      {criterion}
    </S.FilterButton>
  )
}
