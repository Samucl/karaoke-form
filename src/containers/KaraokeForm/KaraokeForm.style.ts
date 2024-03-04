import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const SubmitButton = styled.button`
    color: #ffffff;
    background-color: #128559;
    border: 0;
    max-width: 140px;
    align-items: center;
    align-content: center;
    padding: 10px;
    border-radius: 5px;
`

export const FormError = styled.span`
    font-size: 15px;
    font-weight: bold;
    color: #c1221e;
`

export const KaraokeFormWrapper = styled.div`
    min-width: 330px;
    width: 25vw;
`
