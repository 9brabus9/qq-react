import FormInput from "@/components/form/FormInput"
import Button from "@/components/form/Button"
import { Link } from "react-router-dom"
import FormCheckbox from "@/components/form/FormCheckbox";
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    consent: z.boolean().refine((val) => val === true, {
        message: "Please read and accept the terms and conditions",
    })
});

type FormFields = z.infer<typeof formSchema>;

export default function NewCustomerForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data, errors);
    }

    return (
        <div>
            <form className="flex flex-col w-full">
                <FormInput classNameGroup="mb-5" variant={errors.email && 'error'} error={errors.email?.message} {...register("email")} labelStyles={"text-base"} label="Email" placeholder="Email" type="text" />
                <FormInput label="Password" classNameGroup="mb-5" variant={errors.password && 'error'} error={errors.password?.message} {...register("password")} labelStyles={"text-base"} placeholder="Password" type="password" />
                <FormCheckbox classNameGroup="mb-5" variant={errors.consent && 'error'} id="privacy" error={errors.consent?.message} {...register("consent")}>
                    I agree to <Link className="ml-1 text-primary" to="/"> QQmoving’s privacy policy</Link>
                </FormCheckbox>
                <Button onClick={handleSubmit(onSubmit)} icons={['icon-arrow']} className="mx-auto my-6 min-w-48">Create</Button>
            </form>
        </div>
    )
}