import styled from "styled-components"
import ButtonIcon from "../../Button-icon"

const FigureContainer = styled.figure`
    width: ${props => props.$expanded ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GanhdiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`
const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Figure = ({ photos, expanded = false, handleZoomOrder }) => {
    return (
        <FigureContainer id={`foto-${photos.id}`} $expanded={expanded}>
            <img src={photos.path} alt={photos.titulo} />
            <figcaption>
                <h3>{photos.titulo}</h3>
                <StyledFooter>
                    <h4>{photos.fonte}</h4>
                    <ButtonIcon>
                        <img src="/icons/favorite.png" alt="Favoritar" />
                    </ButtonIcon>
                    {!expanded && <ButtonIcon aria-hidden={expanded} onClick={() => handleZoomOrder(photos)}>
                        <img src="/icons/expand.png" alt="Expandir" />
                    </ButtonIcon>}
                </StyledFooter>
            </figcaption>
        </FigureContainer>
    )
}

export default Figure