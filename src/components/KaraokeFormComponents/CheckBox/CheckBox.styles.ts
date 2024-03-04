import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const StyledInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 26px;
    min-height: 26px;
    border: 2px solid #cccaca;
    border-radius: 7px;
    margin: 0;
    cursor: pointer;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        clip-path: polygon(
            28% 38%,
            41% 53%,
            75% 24%,
            86% 38%,
            40% 78%,
            15% 50%
        );
        transform: scale(0);
        background-color: #128559;
    }

    &:checked::before {
        transform: scale(3);
    }
`

export const StyledSpan = styled.span`
    font-size: 13px;
`
