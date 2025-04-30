import styled from 'styled-components'
import tags from './tags.json'


const TagContainer = styled.section`
    display: flex;
    margin-top: 48px;
    align-items: center;
    gap: 12px;
`

const StyledTitleTag = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
    font-weight: 400;
`

const StyledDiv = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
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

const Tags = ({ setTag }) => { 
    return (
            <TagContainer>
                <StyledTitleTag>Busque por tags: </StyledTitleTag>
                <StyledDiv>
                    {tags.map(tag => <StyledButton key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</StyledButton>)}
                </StyledDiv>
            </TagContainer>
    )
}

export default Tags