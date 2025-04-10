import styled from "styled-components"
import StyledTitle from "../Title"
import Tags from "./Tags"
import Popular from "../Popular"

const StyledGallery = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const Gallery = () => {
    return (
        <> 
            <Tags/>
            <StyledGallery>
                <FluidSection>
                    <StyledTitle>Navegue pela galeria</StyledTitle>
                </FluidSection>
                <Popular/>
            </StyledGallery>
        </>
    )
}

export default Gallery