import styled from "styled-components"
import GlobalStyles from "./components/Global-styles"
import Header from "./components/Header"
import SideBar from "./components/Side-bar"
import Banner from "./components/Banner"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      <Header />
      <SideBar />
      <Banner
        backgroundImage={"/img/banner.png"}
        text={"A galeria mais completa de fotos do espaço"}
      />
    </BackgroundGradient>
  )
}

export default App
