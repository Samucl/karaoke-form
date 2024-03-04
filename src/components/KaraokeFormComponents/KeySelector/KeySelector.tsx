import { FC } from 'react'
import {
    CustomRadioWrapper,
    KeySelectorWrapper,
    StyledInput,
    StyledLabel,
    StyledSpan,
} from './KeySelector.styles'
import { KeySelectorProps } from './KeySelector.types'
import { Description } from '..'

const CustomKeyRadio: React.FC<{ name: string | undefined; value: string }> = ({
    name,
    value,
}) => {
    return (
        <StyledLabel>
            <StyledInput type="radio" name={name} value={value} />
            <StyledSpan>{value}</StyledSpan>
        </StyledLabel>
    )
}

const KeySelector: FC<KeySelectorProps> = ({ name, label }) => {
    return (
        <KeySelectorWrapper>
            <Description label={label} />
            <CustomRadioWrapper>
                <CustomKeyRadio name={name} value="-2" />
                <CustomKeyRadio name={name} value="-1" />
                <CustomKeyRadio name={name} value="0" />
                <CustomKeyRadio name={name} value="1" />
                <CustomKeyRadio name={name} value="2" />
            </CustomRadioWrapper>
        </KeySelectorWrapper>
    )
}

export default KeySelector
