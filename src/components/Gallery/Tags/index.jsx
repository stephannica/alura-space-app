import styled from 'styled-components'
import tags from './tags.json'


const TagContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 48px;
`

const StyledTitleTag = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    font-weight: 400;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
`

const StyledButton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Tags = () => { 
    return (
            <TagContainer>
                <StyledTitleTag>Busque por tags: </StyledTitleTag>
                <ButtonContainer>
                    {tags.map(tag => <StyledButton key={tag.id}>{tag.titulo}</StyledButton>)}
                </ButtonContainer>
            </TagContainer>
    )
}

export default Tags