import { cn } from "@/lib/utils";
import {
  Accordion as Acc,
  AccordionItem as AccItem,
} from "@szhsin/react-accordion";
import React from "react";

const Accordion = ({
  ref,
  transition = true,
  transitionTimeout = 250,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Acc> & {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <Acc
      className={cn("space-y-4", className)}
      ref={ref}
      transition={transition}
      transitionTimeout={transitionTimeout}
      {...props}
    />
  );
};
Accordion.displayName = "Accordion";

const AccordionItem = ({
  ref,
  className,
  buttonProps,
  header,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccItem> & {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <AccItem
      header={header}
      ref={ref}
      buttonProps={{
        ...buttonProps,
        className: cn(
          "bg-neutral-100 px-2 py-4 w-full text-start flex items-center justify-between",
          buttonProps?.className,
        ),
      }}
      className={cn(
        "w-full overflow-hidden rounded-xl bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
};
AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionItem };
