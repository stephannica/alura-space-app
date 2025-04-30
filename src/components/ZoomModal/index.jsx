import styled from "styled-components"
import Figure from "../Gallery/Figure"
import ButtonIcon from "../ButtonIcon"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    border-color: transparent;
    background-color: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`


const ZoomModal = ({ photos, whenClosing, toggleFavorite }) => {
    return (
        <>
            {photos && <>
                <Overlay />
                <StyledDialog open={!!photos} onClose={whenClosing}>
                    <Figure photos={photos} expanded={true} toggleFavorite={toggleFavorite} />
                    <form method="dialog">
                        <ButtonIcon formMethod="dialog">
                            <img src="/icons/close.png" alt="Fechar" />
                        </ButtonIcon>
                    </form>
                </StyledDialog>
            </>}
        </>
    )
}

export default ZoomModal