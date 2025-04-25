import styled from "styled-components"
import GlobalStyles from "./components/Global-styles"
import Header from "./components/Header"
import SideBar from "./components/Side-bar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import photos from "./photos.json"
import { useState } from "react"
import ZoomModal from "./components/Modal-zoom"
import Footer from "./components/Footer"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex; 
  gap: 24px;
`
const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [photosForGallery, setPhotosForGallery] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const toggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    setPhotosForGallery(photosForGallery.map(photosForGallery => {
      return {
        ...photosForGallery,
        favorite: photosForGallery.id === photo.id ? !photo.favorite : photosForGallery.favorite
      }
    }))
  }

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContainer>
            <Banner
              backgroundImage={"/img/banner.png"}
              text={"A galeria mais completa de fotos do espaço!"}
            />
            <Gallery
              toggleFavorite={toggleFavorite}
              handlePhotoSelect={photos => setSelectedPhoto(photos)}
              photos={photosForGallery} />
          </GalleryContainer>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        photos={selectedPhoto}
        whenClosing={() => setSelectedPhoto(null)}
        toggleFavorite={toggleFavorite}
        />
      <Footer/>
    </BackgroundGradient>
  )
}

export default App
