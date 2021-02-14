import * as React from 'react'
import { RadioGroupContext } from './RadioGroup'

export interface RadioProps {
  checked?: boolean
  disabled?: boolean
  name?: string
  value?: string | number
  onChange?(checked: boolean): void
}

export const Radio: React.FC<RadioProps> = ({
  children,
  disabled,
  checked,
  name,
  value,
  onChange,
}) => {
  return (
    <RadioGroupContext.Consumer>
      {({ name: providedName, onChange: providedOnChange }) => (
        <label className="mcss-radio-container">
          <input
            className="mcss-radio"
            type="radio"
            checked={checked}
            disabled={disabled}
            name={providedName ?? name}
            value={value}
            onChange={(evt) => {
              const isChecked = (evt.target as HTMLInputElement).checked
              if (onChange) {
                onChange(isChecked)
              }

              if (providedOnChange && isChecked && value) {
                providedOnChange(value)
              }
            }}
          />
          <span className="mcss-radio-label" data-disabled={disabled || undefined}>
            {children}
          </span>
        </label>
      )}
    </RadioGroupContext.Consumer>
  )
}

export default Radio
