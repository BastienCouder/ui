import * as React from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '../buttons/button'
import { InputProps, TextField } from './text-field'

const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const disabled = props.value === '' || props.value === undefined || props.disabled

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      console.log('Toggle password visibility') // Debug log
      setShowPassword((prev) => !prev)
    }

    return (
      <div className="relative">
        <TextField
          type={showPassword ? 'text' : 'password'}
          className={cn('hide-password-toggle pr-10', className)} 
          ref={ref}
          inputSize="md"
          shape='rectangle'
          suffix={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className=' '
              disabled={disabled}
            >
              {showPassword && !disabled ? (
                <EyeIcon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
              )}
              <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
            </button>
          }
          {...props}
        />
      </div>
    )
  }
)

PasswordField.displayName = 'PasswordField'

export { PasswordField }
