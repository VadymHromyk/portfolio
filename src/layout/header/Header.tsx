import React from "react"
import styled from "styled-components"
import { Menu } from "../../components/menu/Menu"
import { Logo } from "../../components/logo/Logo"

const items = ["About", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items} />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`