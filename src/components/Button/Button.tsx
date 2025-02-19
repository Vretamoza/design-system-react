// src/components/Button/Button.tsx
import { ButtonHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
}

function Button ({ label, primary, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${primary ? 'button--primary' : 'button--secondary'}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
