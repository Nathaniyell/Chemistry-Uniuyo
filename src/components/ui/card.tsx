import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { CiCalendar } from "react-icons/ci"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

const NewsCard = ({
    title,
    image,
    date,
    href,
}: {
    title: string
    image: string
    date: string
    href: string
}) => {
    return (
        <Link href={href} className="block h-full transition-colors hover:border-primary/50">
            <Card className="overflow-hidden h-full">
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <CiCalendar className="text-lg" />
                        {date}
                    </div>
                    <CardTitle className="line-clamp-2">{title}</CardTitle>
                </CardHeader>
                <CardFooter>
                    <div className="flex items-center text-primary hover:text-primary/80">
                        Read more <MdOutlineKeyboardDoubleArrowRight className="ml-1 animate-pulse" />
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    NewsCard,
} 