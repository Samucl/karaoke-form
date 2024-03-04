import { FC } from 'react'
import { DropdownProps } from './Dropdown.types'
import { DropdownWrapper, StyledSelect } from './Dropdown.styles'
import { Description } from '..'

const Dropdown: FC<DropdownProps> = ({ items, name, label }) => {
    return (
        <DropdownWrapper>
            <Description label={label} />
            <StyledSelect name={name}>
                <option value="" disabled selected hidden>
                    Valitse alta
                </option>
                {items.map((item) => (
                    <option value={item.id}>{item.item}</option>
                ))}
            </StyledSelect>
        </DropdownWrapper>
    )
}

export default Dropdown
