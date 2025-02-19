import { ButtonHTMLAttributes } from 'react';
import './Button.css';
import * as Icons from "../Icon"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconOnly?: boolean;
  iconName?: string;
  ghost?: boolean;
  danger?: boolean;
  round?: boolean;
  size?: "default" | "large" | "small"
}



function Button ({ label, iconOnly=false, iconName, ...props }: ButtonProps) {

  const Icon = Icons[iconName as keyof typeof Icons];

  return (
    <button
      className={`button ${iconOnly ? 'button--icononly' : 'button--basic'}`}
      {...props}
    >
       {iconOnly ? <Icon /> : (label && <span>{label}</span>)}
    </button>
  );
};

export default Button;
