import styled from "styled-components";
import banner from "/img/banner.png"

const StyledDiv = styled.div`
    width: 1156px;
    max-width: 100%;
    min-height: 328px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin: 0;
`

const StyledText = styled.h1`
    width: 301px;
    height: 144px;
    font-size: 40px;
    color: #FFFFFF;
    margin: 92px;
`


function Banner(){
    return (
        <StyledDiv>
            <StyledText>A galeria mais completa de fotos do espaço!</StyledText>
        </StyledDiv>
    )
}

export default Banner;