import * as React from 'react'

export interface TextInputProps {
  disabled?: boolean
  name?: string
  placeholder?: string
  value?: string
  onChange?(value: string): void
}

export const TextInput: React.FC<TextInputProps> = ({
  disabled,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (evt: React.SyntheticEvent) => {
    const theValue = (evt.target as HTMLInputElement).value
    if (onChange) {
      onChange(theValue)
    }
  }

  return (
    <div className="mcss-text-input-container">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        className="mcss-text-input"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  )
}

export default TextInput
