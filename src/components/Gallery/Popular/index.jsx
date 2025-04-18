import styled from "styled-components"
import StyledTitle from "../../Title"
import photos from './popular-photos.json'

const PhotosColums = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Popular = () => {
    return (
        <section>
            <StyledTitle $align="center">Populares</StyledTitle>
            <PhotosColums>
                {photos.map(photos => <Image key={photos.id} src={photos.path} alt={photos.alt} />)}
            </PhotosColums>
            <Button>Ver mais</Button>
        </section>
    )
}

export default Popular