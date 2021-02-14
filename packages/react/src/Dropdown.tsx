import * as React from 'react'

interface DropdownProps {
  name?: string
  disabled?: boolean
  onChange?(value: string): void
}

export const Dropdown: React.FC<DropdownProps> = ({ children, disabled, name, onChange }) => (
  <div className="mcss-selector" data-disabled={disabled ?? undefined}>
    <select
      className="mcss-select"
      name={name}
      disabled={disabled}
      onChange={(evt) => {
        if (onChange) {
          onChange(evt.target.value)
        }
      }}
    >
      {children}
    </select>
  </div>
)

export default Dropdown
