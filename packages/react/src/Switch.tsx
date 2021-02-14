import * as React from 'react'

export interface SwitchProps {
  checked?: boolean
  disabled?: boolean
  name?: string
  value?: string | number
  onChange?(checked: boolean): void
}

export const Switch: React.FC<SwitchProps> = ({ children, disabled, checked, name, value, onChange }) => {
  const handleChange = (evt: React.SyntheticEvent) => {
    const isChecked = (evt.target as HTMLInputElement).checked
    if (onChange) {
      onChange(isChecked)
    }
  }

  return (
    <label className="mcss-swich-container">
      <input
        className="mcss-swich"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span className="mcss-swich-label" data-disabled={disabled || undefined}>
        {children}
      </span>
    </label>
  )
}

export default Switch
