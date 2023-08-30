import React from "react"
import styled from "styled-components"

type ProjectPropsType = {
    title: string
    description: string
    image: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <div>
                <Title>{props.title}</Title>
                <Text>{props.description}</Text>
                <Button>View Project</Button>
            </div>
            <Image src={props.image} alt="project`s image" />
        </StyledProject>
    )
}

const StyledProject = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    max-width: 992px;
    width: 100%;
    border-radius: 24px;

`
const Title = styled.h3`

`
const Text = styled.p`

`
const Button = styled.button`

`
const Image = styled.img`
    width: 50%;
    object-fit: cover;
`