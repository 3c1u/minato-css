import * as React from 'react'

export interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  name?: string
  value?: string | number
  onChange?(checked: boolean): void
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, disabled, checked, name, value, onChange }) => {
  const handleChange = (evt: React.SyntheticEvent) => {
    const isChecked = (evt.target as HTMLInputElement).checked
    if (onChange) {
      onChange(isChecked)
    }
  }

  return (
    <label className="mcss-checkbox-container">
      <input
        className="mcss-checkbox"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className="mcss-checkbox-label" data-disabled={disabled || undefined}>
        {children}
      </span>
    </label>
  )
}

export default Checkbox
