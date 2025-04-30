import styled from "styled-components";
import InputText from "../Input-text";

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

function Header({ filter, setFilter }) {
    return (
        <StyledHeader>
            <img src="/img/logo.png" alt="SpaceAppLogo" />
            <InputText filter={filter} setFilter={setFilter}/>
        </StyledHeader>
    )
}

export default Header;