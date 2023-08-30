import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Vadym</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="instagram-logo" height="50px" width="50px" viewBox="0 0 50 50" />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="linkedin-logo" height="50px" width="50px" viewBox="0 0 50 50" />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId="envelope-logo" height="50px" width="50px" viewBox="0 0 50 50" />
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>
                @ 2023 Vadym Hromyk, All Rights Reserved.
            </Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`
