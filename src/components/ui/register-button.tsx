
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import { ComingSoonOverlay } from "./coming-soon-overlay";

export interface RegisterButtonProps extends Omit<ButtonProps, "variant"> {
  children?: React.ReactNode;
  showComingSoon?: boolean;
}

const RegisterButton = React.forwardRef<HTMLButtonElement, RegisterButtonProps>(
  ({ className, children = "REGISTER NOW!", showComingSoon = true, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div className="relative">
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden border border-mun-purple bg-transparent hover:bg-mun-purple hover:shadow-[0_0_15px_rgba(155,135,245,0.4)] transition-all duration-300 rounded-full px-8 py-3 text-lg font-medium text-white",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={showComingSoon}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          {isHovered && (
            <span className="absolute inset-0 bg-gradient-to-r from-mun-purple to-mun-purple-light rounded-full" />
          )}
        </Button>
        
        {showComingSoon && (
          <ComingSoonOverlay type="button" message="Registration Opening Soon" />
        )}
      </div>
    );
  }
);

RegisterButton.displayName = "RegisterButton";

export { RegisterButton };
