import React from "react"
import styled from "styled-components"
import photo from "../../../assets/images/myPhoto.jpg"
import yellowBackground from "../../../assets/images/yellow-bg.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-between">
                <div>
                    <h1>Software Developer</h1>
                    <h2>Hello,  my name is Vadym Hromyk</h2>
                    <span>Short text with details about you,<br />
                        what you do or your professional career.<br />
                        You can add more information on the about page.<br />
                    </span>
                    <button>1</button>
                    <button>2</button>
                </div>
                <Photo src={photo} alt='photo' >
                    
                </Photo>
            </FlexWrapper>
        </StyledMain>
    )
}
// yellowBackground
const StyledMain = styled.section`
    min-height: 50vh;
    background-color: pink;
`

const Photo = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`