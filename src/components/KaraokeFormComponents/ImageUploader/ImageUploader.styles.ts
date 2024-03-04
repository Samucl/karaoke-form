import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const ImageUploaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledInput = styled.input`
    opacity: 0;
    position: absolute;
    width: 0;
    &:focus + label,
    &:focus + img {
        outline: 2px solid #000000;
    }
`

export const FileWrapper = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    > svg {
        cursor: pointer;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    display: flex;
    color: #c1221e;
    font-size: 20px;
`

export const RemoveButton = styled.button`
    border: none;
    background: none;
    padding: 0;
    cursor: 'pointer';
`

export const StyledImage = styled.img`
    max-width: 70px;
    border-radius: 5px;
`

export const StyledLabel = styled.label`
    background-color: #ffffff;
    display: inline-block;
    padding: 13px 0;
    border-radius: 5px;
    border: 1px dashed #bebaba;
    font-size: 12px;
    text-align: center;
    width: 100%;
    cursor: pointer;
`

export const ImageLabel = styled.label`
    display: flex;
    max-width: 70px;
    border-radius: 5px;
    cursor: pointer;
`
