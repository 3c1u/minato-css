import * as React from 'react'

export interface ButtonProps {
  primary?: boolean
  danger?: boolean
  raise?: boolean
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  danger,
  raise,
  type,
  disabled,
}) => (
  <button
    className="mcss-button"
    type={type ?? 'button'}
    disabled={disabled}
    data-primary={primary || undefined}
    data-danger={danger || undefined}
    data-no-raise={!raise || undefined}
  >
    {children}
  </button>
)

export default Button
