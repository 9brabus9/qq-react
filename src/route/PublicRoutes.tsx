import { Navigate, Outlet } from "react-router-dom";
import { useGetUsers } from "@/hook/useUser";
import { UserModel } from "@/models/UserModel";

const PublicRoutes = () => {
    const { data, isLoading } = useGetUsers()
    const user = data as UserModel || null;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default PublicRoutes;