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

function Header() {
    return (
        <StyledHeader>
            <img src="/img/logo.png" alt="SpaceAppLogo" />
            <InputText/>
        </StyledHeader>
    )
}

export default Header;