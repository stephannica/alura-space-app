import styled from "styled-components"

const StyledTitle = styled.h2`
        color: #7B78E6;
        font-size: 32px;
        font-weight: 400;
        text-align: ${props => props.$align ? props.$align : "left"};
`

export default StyledTitle