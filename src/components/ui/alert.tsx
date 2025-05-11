
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground shadow-sm",
        destructive:
          "border-destructive/30 text-destructive bg-destructive/10 dark:border-destructive/30 dark:text-destructive-foreground [&>svg]:text-destructive shadow-sm",
        success:
          "border-green-500/30 text-green-700 bg-green-50 dark:border-green-500/30 dark:bg-green-950/30 dark:text-green-400 [&>svg]:text-green-600 shadow-sm",
        warning:
          "border-yellow-500/30 text-yellow-700 bg-yellow-50 dark:border-yellow-500/30 dark:bg-yellow-950/30 dark:text-yellow-400 [&>svg]:text-yellow-600 shadow-sm",
        info:
          "border-blue-500/30 text-blue-700 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-blue-400 [&>svg]:text-blue-600 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
