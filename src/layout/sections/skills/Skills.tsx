import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Skill } from "./skill/Skill"
import { SectionTitle } from "../../../components/SectionTitle"

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                Skills
            </SectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Skill
                    iconId="react"
                    title="react"
                    description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing."
                />
                <Skill
                    iconId="css"
                    title="css3"
                    description="Lorem ipsum dolor sit amet."
                />
                <Skill
                    iconId="html"
                    title="html5"
                    description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. Lorem ipsum dolor sit"
                />
                <Skill
                    iconId="js"
                    title="js"
                    description="Lorem ipsum dolor sit amet."
                />
                <Skill
                    iconId="vscode"
                    title="vscode"
                    description="Lorem ipsum dolor sit amet."
                />
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    min-height: 50vh;
    background-color: pink;
`
