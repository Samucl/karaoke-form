import styled from 'styled-components'

export const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const StyledSelect = styled.select`
    padding: 13px;
    border: 1px solid #bebaba;
    border-radius: 5px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #ffffff;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
`
