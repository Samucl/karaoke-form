import { FC } from 'react'
import { DescriptionProps } from './Description.types'
import { StyledSpan } from './Description.styles'

const Description: FC<DescriptionProps> = ({ label }) => {
    return (
        <>
            {label && (
                <StyledSpan>
                    <strong>{label}</strong>
                </StyledSpan>
            )}
        </>
    )
}

export default Description
