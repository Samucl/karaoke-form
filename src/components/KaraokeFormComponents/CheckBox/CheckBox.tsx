import { FC } from 'react'
import { CheckBoxProps } from './CheckBox.types'
import { CheckBoxWrapper, StyledInput, StyledSpan } from './CheckBox.styles'

const CheckBox: FC<CheckBoxProps> = ({ label, name }) => {
    return (
        <CheckBoxWrapper>
            <StyledInput type="checkbox" name={name} />
            <StyledSpan>{label}</StyledSpan>
        </CheckBoxWrapper>
    )
}

export default CheckBox
