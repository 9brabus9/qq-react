import FormInput from "@/components/form/FormInput"
import Button from "@/components/form/Button"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/services/api/Auth"
import { setHeaderToken } from "@/lib/axios-util"
import { z } from "zod"
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from "usehooks-ts";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
});

type FormFields = z.infer<typeof formSchema>;

export default function LoginForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
        resolver: zodResolver(formSchema)
    })
    const [, setAuthToken] = useSessionStorage('auth_token', null)

    const onSubmit: SubmitHandler<FormFields> = async (params): Promise<void> => {
        try {
            const token = await login(params);
            if (token) {
                console.log(token, 'new_token')
                setAuthToken(token)
                setHeaderToken(token)
                navigate("/");
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <>
            <form className="flex flex-col w-full">
                <FormInput classNameGroup="mb-5" variant={errors.email && 'error'} error={errors.email?.message} {...register("email")} labelStyles={"text-base"} label="Email" placeholder="Email" type="text" />
                <FormInput label="Password" classNameGroup="mb-5" variant={errors.password && 'error'} error={errors.password?.message} {...register("password")} labelStyles={"text-base"} placeholder="Password" type="password" />
                <Button onClick={handleSubmit(onSubmit)} icons={['icon-arrow']} className="mx-auto my-6 min-w-48">Login</Button>
            </form>
        </>
    )
}
