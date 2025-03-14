import React from "react";
import {
  Accordion as Acc,
  AccordionItem as AccItem,
} from "@szhsin/react-accordion";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Acc>
>(
  (
    { transition = true, transitionTimeout = 250, className, ...props },
    ref,
  ) => {
    return (
      <Acc
        className={cn("space-y-4", className)}
        transition={transition}
        transitionTimeout={transitionTimeout}
        ref={ref}
        {...props}
      />
    );
  },
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccItem>
>(({ className, buttonProps, header, ...props }, ref) => {
  return (
    <AccItem
      className={cn(
        "w-full overflow-hidden rounded-xl bg-neutral-100",
        className,
      )}
      ref={ref}
      buttonProps={{
        ...buttonProps,
        className: cn(
          "bg-neutral-100 px-2 py-4 w-full text-start flex items-center justify-between",
          buttonProps?.className,
        ),
      }}
      header={header}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionItem };
