// Bento Grid by Magic UI (MIT), https://magicui.design/docs/components/bento-grid — listed on 21st.dev.
// Taken from its registry (https://magicui.design/r/bento-grid.json); changed for Lumen: no call-to-action link
// (the cards describe, they do not lead anywhere), a badge slot, the icon in the brand colour, and no
// hover lift on touch screens.
import { type ComponentPropsWithoutRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background?: ReactNode
  Icon: React.ElementType
  description: string
  /** A small mark next to the name, e.g. «Pro» or «Скоро». */
  badge?: ReactNode
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  badge,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:bg-card transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="relative z-10 p-5">
      <div className="pointer-events-none flex transform-gpu flex-col gap-1.5 transition-all duration-300 [@media(hover:hover)]:lg:group-hover:-translate-y-2">
        <Icon className="h-10 w-10 origin-left transform-gpu text-brand transition-all duration-300 ease-in-out [@media(hover:hover)]:group-hover:scale-90" />
        <h3 className="flex flex-wrap items-center gap-2 text-lg font-semibold text-foreground">
          {name}
          {badge}
        </h3>
        <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
