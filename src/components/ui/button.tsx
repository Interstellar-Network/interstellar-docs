import * as React from "react";
import { cn } from "@site/src/utils/cn"; // Ensure this utility exists

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-8 py-4 rounded-md font-medium transition duration-200",
          variant === "default" && "bg-blue-500 text-white hover:bg-blue-600",
          variant === "outline" && "border border-gray-300 text-gray-800 hover:bg-gray-100",
          variant === "ghost" && "text-gray-500 hover:bg-gray-200",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";