import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef, useEffect, useState } from "react";
import cn from "@/lib/util";

const buttonVariants = cva("transition ease-in duration-300",
    {
        variants: {
            variant: {
                primary: ["group", "border-primary", "bg-primary", "text-white", "hover:text-primary", "hover:bg-white"],
                secondary: ["group", "border-primary", "bg-white", "hover:bg-primary", "hover:text-white"],
                light: ["border-gray-100", "hover:border-primary"],
            },
            size: {
                small: ["h-8", "px-2"],
                medium: ["h-10", "px-5"],
                large: ["h-[50px]", "px-8"],
            },
            iconVariant: {
                whiteBgIcon: ["text-primary", "bg-white", "border", "border-white", "group-hover:bg-primary", "group-hover:border-primary", "group-hover:text-white"],
                primaryBgIcon: ["text-white", "bg-primary", "border", "border-primary", "group-hover:bg-white", "group-hover:text-primary"],
            },
        },
        defaultVariants: {
            size: "large",
            variant: "primary",
            iconVariant: "whiteBgIcon"
        },
    }
);

type ButtonProps =
    React.ComponentPropsWithRef<'button'> &
    VariantProps<typeof buttonVariants> &
    {
        icons?: string[]
    };

const Button = forwardRef(
    ({ size, variant, className, iconVariant, children, icons, onClick, ...props }: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {

        const [currentIconIndex, setCurrentIconIndex] = useState(0);

        useEffect(() => {
            let intervalId: NodeJS.Timeout;

            if (icons && icons.length > 1) {
                intervalId = setInterval(() => {
                    setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
                }, 2000);
            }

            return () => {
                clearInterval(intervalId);
            };
        }, [icons]);

        return (
            <button
                onClick={onClick}
                type="button"
                ref={ref}
                className={cn('px-3 py-2 text-sm inline-flex items-center relative min-w-40 justify-center border rounded-full', icons &&
                    icons.length > 0 && '!pr-14', buttonVariants({ variant, size, iconVariant: null }), className,)}
                {...props}
            >
                {children}
                {icons &&
                    icons.length > 0 && (
                        <div className={cn("w-[50px] h-[50px] rounded-full absolute inline-flex items-center justify-center text-2xl right-[-1px] ml-5", buttonVariants({ iconVariant, size: null, variant: null }))}>
                            {icons.map((iconClass, index) => (
                                <i key={index} className={cn(iconClass, index === currentIconIndex ? 'visible' : 'hidden')}></i>
                            ))}
                        </div>
                    )}
            </button>
        );
    }
);

export default Button;