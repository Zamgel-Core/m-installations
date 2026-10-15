import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D16] disabled:opacity-50 disabled:pointer-events-none min-w-0 max-w-full whitespace-normal text-center select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[38px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[48px]',
  };

  const variantStyles = {
    primary:
      'bg-[#00B9F2] text-[#080D16] font-bold hover:bg-[#38BDF8] active:bg-[#0284C7] shadow-lg shadow-[#00B9F2]/20 hover:shadow-[#00B9F2]/35',
    secondary:
      'bg-[#142B49] text-white hover:bg-[#1E3E68] border border-[#00B9F2]/20 active:bg-[#0E2036]',
    outline:
      'bg-transparent text-white border border-slate-700 hover:border-[#00B9F2] hover:text-[#00B9F2] active:bg-white/5',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60 active:bg-slate-800',
    whatsapp:
      'bg-[#25D366] text-[#080D16] font-bold hover:bg-[#22c55e] active:bg-[#16a34a] shadow-lg shadow-[#25D366]/20',
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth ? 'w-full' : '',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="min-w-0 break-words">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
