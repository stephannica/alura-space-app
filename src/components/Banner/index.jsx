import styled from "styled-components";

const StyledDiv = styled.div`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    min-height: 328px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin: 0;
    border-radius: 20px;
`

const StyledText = styled.h1`
    font-weight: 400;
    font-size: 40px;
    max-width: 300px;
    line-height: 48px;
    color: #FFFFFF;
    padding: 0 64px;
`


const Banner = ({backgroundImage, text}) => {
    return (
        <StyledDiv $backgroundImage={backgroundImage}>
            <StyledText>{text}</StyledText>
        </StyledDiv>
    )
}

export default Banner;