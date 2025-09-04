// import * as React from "react"
// import { cn } from "@/lib/utils"
// // import type { HTMLAttributes } from "react"   // <-- add this line

// const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div
//       ref={ref}
//       className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
//       {...props}
//     />
//   )
// )
// Card.displayName = "Card"

// const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => (
//     <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
//   )
// )
// CardContent.displayName = "CardContent"

// export { Card, CardContent }


// import * as React from "react"
// import type { HTMLAttributes } from "react"   // <-- add this line

// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

// export function Card({ className, ...props }: CardProps) {
//   return (
//     <div
//       className={`rounded-2xl border bg-white shadow p-4 ${className}`}
//       {...props}
//     />
//   )
// }

// export function CardContent({ className, ...props }: CardProps) {
//   return <div className={`mt-2 ${className}`} {...props} />
// }


import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-2xl border bg-white shadow p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
