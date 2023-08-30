import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <Field placeholder="name" />
                <Field placeholder="email" />
                <Field placeholder="message" as={"textarea"} />
                <Button type="submit">Send</Button>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: pink;
`
const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`

`
const Button = styled.button`

`