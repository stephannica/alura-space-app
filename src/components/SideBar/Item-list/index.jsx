import styled from "styled-components"

const StyledItemList = styled.li`
    margin-bottom: 30px;
    line-height: 29px;
    font-size: 24px;
    cursor: pointer;
    color: ${ props  => props.$active ? "#7B78E5" : "#D9D9D9"};
    font-family: ${ props  => props.$active ? "GanhdiSansBold" : "GanhdiSansRegular"};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemList = ({children, activeIcon, inactiveIcon, active = false }) => {
    return (
        <StyledItemList $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt="" />
            {children}
        </StyledItemList>
    )

}

export default ItemList