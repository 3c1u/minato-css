import * as React from 'react'

export interface DropdownItemProps {
  selected?: boolean
  disabled?: boolean
  name?: string
  value?: string | number
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  disabled,
  selected,
  value,
}) => {
  return (
    <option className="mcss-option" value={value} disabled={disabled} selected={selected}>
      {children}
    </option>
  )
}

export default DropdownItem
