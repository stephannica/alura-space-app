import styled from "styled-components"
import StyledTitle from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import Figure from "./Figure"

const StyledGallery = styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const FigureSection = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({ photos = [], setTag, handlePhotoSelect, toggleFavorite }) => {
    return (
        <>
            <Tags setTag={setTag}/>
            <StyledGallery>
                <FluidSection>
                    <StyledTitle>Navegue pela galeria</StyledTitle>
                    <FigureSection>
                        {photos.map(photos => <Figure
                            toggleFavorite={toggleFavorite}
                            handleZoomOrder={handlePhotoSelect}
                            key={photos.id}
                            photos={photos}
                        /> )}
                    </FigureSection>
                </FluidSection>
                <Popular />
            </StyledGallery>
        </>
    )
}

export default Gallery