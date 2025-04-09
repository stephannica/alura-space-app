import styled from "styled-components"
import ItemList from "./Item-list"

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

function SideBar() {
    return (
        <aside>
            <nav>
                <StyledList>
                    <ItemList
                        activeIcon="/icons/home-active.png"
                        inactiveIcon="/icons/home-inactive.png"
                        active={true}>
                        Inicio
                    </ItemList>

                    <ItemList
                        activeIcon="/icons/most-viewed-active.png"
                        inactiveIcon="/icons/most-viewed-inactive.png"
                        active={false}>
                        Mais vistas
                    </ItemList>

                    <ItemList
                        activeIcon="/icons/most-liked-active.png"
                        inactiveIcon="/icons/most-liked-inactive.png"
                        active={false}>
                        Mais curtidas
                    </ItemList>

                    <ItemList
                        activeIcon="/icons/news-active.png"
                        inactiveIcon="/icons/news-inactive.png"
                        active={false}>
                        Novas
                    </ItemList>
                    
                    <ItemList
                        activeIcon="/icons/surprise-me-active.png"
                        inactiveIcon="/icons/surprise-me-inactive.png"
                        active={false}>
                        Surpreenda-me
                    </ItemList>
                </StyledList>
            </nav>
        </aside>
    )
}
export default SideBar