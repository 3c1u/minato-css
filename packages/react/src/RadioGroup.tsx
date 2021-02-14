import * as React from 'react'

interface RadioGroupProps {
  name?: string
  onChange?(value: number | string): void
}

interface RadioGroupContextType {
  name?: string
  onChange?(value: number | string): void
}

export const RadioGroupContext = React.createContext({} as RadioGroupContextType)

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, name, onChange }) => (
  <RadioGroupContext.Provider value={{ name, onChange }}>
    <div className="mcss-radio-group">{children}</div>
  </RadioGroupContext.Provider>
)

export default RadioGroup
