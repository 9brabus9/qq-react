import { UserModel } from "@/models/UserModel"
import { Outlet, useNavigate } from "react-router-dom";
import { useGetUsers } from "@/hook/useUser";

export default function ProtectedRoute() {
    const { data, isLoading } = useGetUsers()
    const user = data as UserModel || null;
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <>
            <Outlet />
        </>
    );

}