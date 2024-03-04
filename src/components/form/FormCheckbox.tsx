import { forwardRef } from 'react';
import cn from "@/lib/util";
import { VariantProps, cva } from "class-variance-authority";


const checkboxViants = cva(
    `mr-3 rounded w-4 h-4 border-gray-300`,
    {
        variants: {
            variant: {
                default: "text-primary bg-white rounded checked:bg-primary focus:ring-primary focus:ring-1",
                error: "border-red-500 focus:border-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof checkboxViants> {
    id: string;
    className?: string;
    classNameGroup?: string;
    error?: string;
}

const FormCheckbox = forwardRef((props: FormCheckboxProps, ref: React.LegacyRef<HTMLInputElement>) => {
    const { error, className, classNameGroup, id, variant, children, ...inputProps } = props;
    return (
        <div className={cn(classNameGroup)}>
            <div className={'flex items-center cursor-pointer'}>
                <input className={cn(checkboxViants({ variant }), className)} id={id} ref={ref} type="checkbox" {...inputProps} />
                <label htmlFor={id}>{children}</label>
            </div>
            {error?.length && <div className='text-sm text-red-500'>{error}</div>}
        </div>
    )
})

export default FormCheckbox;