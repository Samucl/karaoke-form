import { FC } from 'react'
import { StyledInput, TextFieldWrapper } from './TextField.styles'
import { TextFieldProps } from './TextField.types'
import { Description } from '../Description'

const TextField: FC<TextFieldProps> = ({ label, name }) => {
    return (
        <TextFieldWrapper>
            <Description label={label} />
            <StyledInput type="text" name={name} />
        </TextFieldWrapper>
    )
}

export default TextField
