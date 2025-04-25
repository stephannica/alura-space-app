import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: #04244F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 80px;
    padding: 22px;
    box-sizing: border-box;

`

const IconContainer = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
    img {
        height: 30px;
        width: 30px;
    }
`

const Copyright = styled.p`
    color: #FFFFFF;
    font-size: 16px;
    margin: 0;
`

const Footer = () => {
    return (
        <StyledFooter>
            <IconContainer>
                <li>
                    <a href="#">
                        <img src="/img/sociais/facebook.svg" alt="Ícone facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/sociais/instagram.svg" alt="Ícone instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/sociais/twitter.svg" alt="Ícone twitter" />
                    </a>
                </li>      
            </IconContainer>
            <Copyright>Desenvolvido por Stephanni Cavalcante</Copyright>
        </StyledFooter>
    )
}

export default Footer
