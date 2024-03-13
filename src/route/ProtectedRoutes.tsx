import { UserModel } from "@/models/UserModel"
import { Outlet, Navigate } from "react-router-dom";
import { useGetUsers } from "@/hook/useUser";

export default function ProtectedRoute() {
    const { data, isLoading } = useGetUsers();

    const user: UserModel = data as UserModel || null;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to={'/login'} />
    }
    return (
        <>
            <Outlet />
        </>
    );

}