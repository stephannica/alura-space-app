import styled from "styled-components"
import searchIcon from "/icons/search.png"

const StyledDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`


const StyledInput = styled.input`
    width: 37.625rem;
    height: 3.5rem;
    background-color: transparent;
    border: 2px solid #C98CF1;
    border-radius: 0.625rem;
    padding-left: 1rem;
    box-sizing: border-box;
    font-size: 1rem;
    color: white;
    font-size: 1.25rem;

    &::placeholder{
        color: white;
        font-size: 1.25rem;
    }
`

const InputIcon = styled.img`
    position: absolute;
    right: 0.85rem;
`

function InputText() {
    return (
        <>
        <StyledDiv>
            <StyledInput type="text" placeholder="O que você procura?" />
            <InputIcon src={searchIcon} alt="search icon" />
        </StyledDiv>
        </>
    )
}

export default InputText