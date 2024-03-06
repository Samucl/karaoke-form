import styled from 'styled-components'

export const KeySelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const CustomRadioWrapper = styled.div`
    display: flex;

    > label:first-child span {
        border-radius: 5px 0 0 5px;
    }

    > label:last-child span {
        border-right: 1px solid #bebaba;
        border-radius: 0 5px 5px 0;
    }
`

export const StyledInput = styled.input`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 0;
    margin: 0;
    &:checked + span {
        background-color: #128559;
        color: #ffffff;
        border: 1px solid transparent;
    }
    &:focus + span {
        border: 2px solid #000000;
        border-right: 2px solid #000000 !important;
    }
`

export const StyledLabel = styled.label`
    display: flex;
    justify-content: center;
    flex: 1;
    cursor: pointer;
    color: #000000;
    background-color: #ffffff;
    height: 42px;
`

export const StyledSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    border-top: 1px solid #bebaba;
    border-bottom: 1px solid #bebaba;
    border-left: 1px solid #bebaba;
`
