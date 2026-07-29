import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClass?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClass, children, id, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("py-20 lg:py-32", className)}
        {...props}
      >
        <div className={cn("container max-w-7xl", containerClass)}>
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
