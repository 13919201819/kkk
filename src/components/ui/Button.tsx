"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon, text, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Layout: Same size for all buttons
          "relative inline-flex items-center justify-center",
          "min-w-[220px] h-16 px-6 rounded-full",
          
          // White background
          "bg-white text-black font-semibold text-base",

          // Shadow and transition
          "shadow-md hover:shadow-lg transition-all duration-200",

          // Responsive (width adapts with screen size if needed)
          "w-full sm:w-auto",

          className
        )}
        {...props}
      >
        {icon && (
          <span className="mr-2 flex items-center text-black">
            {icon}
          </span>
        )}
        <span className="truncate">{text}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
