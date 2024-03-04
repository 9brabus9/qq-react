import { forwardRef } from 'react';
import cn from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";


const inputVariants = cva(
    `border rounded-md focus:ring-0 h-8 placeholder:text-black/20`,
    {
        variants: {
            variant: {
                default: "border-gray-100 focus:ring-0 focus:border-primary",
                error: "border-red-500 focus:border-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    label?: string;
    labelStyles?: string;
    className?: string;
    classNameGroup?: string;
    error?: string;
}

const FormInput = forwardRef((props: inputProps, ref: React.LegacyRef<HTMLInputElement>) => {
    const { label, labelStyles, error, className, classNameGroup, variant, ...inputProps } = props;
    return (
        <div className={cn('flex flex-col', classNameGroup)}>
            {label?.length && <label className={cn('text-sm mb-1', labelStyles)} htmlFor="id">{label}</label>
            }
            <input className={cn(inputVariants({ className, variant }))} ref={ref} {...inputProps} />
            {error?.length && <div className='text-sm text-red-500'>{error}</div>}
        </div >
    );
});

export default FormInput