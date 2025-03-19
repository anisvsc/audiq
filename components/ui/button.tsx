import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:from-primary/90 hover:to-primary/80",
        destructive:
          "bg-gradient-to-r from-destructive to-destructive/90 text-white shadow-lg shadow-destructive/25 hover:shadow-destructive/40 hover:from-destructive/90 hover:to-destructive/80",
        outline:
          "border border-white/10 bg-white/5 text-white backdrop-blur-sm shadow-lg shadow-black/10 hover:bg-white/10 hover:border-white/20 hover:shadow-black/20",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:from-secondary/90 hover:to-secondary/80",
        ghost:
          "hover:bg-accent/20 hover:text-accent-foreground backdrop-blur-sm",
        link: 
          "text-primary underline-offset-4 hover:underline decoration-primary/50 hover:decoration-primary",
        gradient:
          "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-500 hover:to-violet-400",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
