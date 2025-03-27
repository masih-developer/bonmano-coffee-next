import { cn } from "@/lib/utils";
import * as React from "react";

const Input = ({ className, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      className={cn(
        "border-input bg-background text-foreground ring-offset-background placeholder:text-muted-foreground focus:border-primary flex h-11 w-full rounded-lg border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};
Input.displayName = "Input";

export { Input };
