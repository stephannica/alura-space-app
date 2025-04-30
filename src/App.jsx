import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import photos from "./photos.json"
import { useEffect, useState } from "react"
import ZoomModal from "./components/ZoomModal"
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
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const filterPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle
    })
    setPhotosForGallery(filterPhotos)
  }, [filter, tag])	

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
        <Header 
          filter={filter}
          setFilter={setFilter}
        />
        <MainContainer>
          <SideBar />
          <GalleryContainer>
            <Banner
              backgroundImage={"/img/banner.png"}
              text={"A galeria mais completa de fotos do espaço!"}
            />
            <Gallery
              setTag={setTag}
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
