import LoginForm from "@/components/login/LoginForm"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="w-full max-w-[420px] m-auto">
            <h1 className="my-6 text-center">Login</h1>
            <LoginForm />
            <p className="text-sm text-center">Don’t have an account? <Link className="text-primary hover:underline" to={'/new-user'}>Create an account</Link>.</p>
        </div>
    )
}
