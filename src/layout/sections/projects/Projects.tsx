import React from "react"
import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Menu } from "../../../components/menu/Menu"
import { Project } from "./project/Project"
import projectOne from "./../../../assets/images/projectOne.webp"
import projectTwo from "./../../../assets/images/projectTwo.webp"
import projectTree from "./../../../assets/images/projectTree.webp"
import { FlexWrapper } from "../../../components/FlexWrapper"

const myProjects = ["Project 1", "Project 2", "Project 3", "Project 4"]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>
                Projects
            </SectionTitle>
            <Menu menuItems={myProjects} />
            <FlexWrapper direction="column" align="center">
                <Project title="first" description="first project" image={projectOne} />
                <Project title="second" description="second project" image={projectTwo} />
                <Project title="third" description="third project" image={projectTree} />
            </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    min-height: 50vh;
    background-color: pink;
`