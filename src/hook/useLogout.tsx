import { useMutation } from "react-query";
import { logOut } from "@/services/api/Auth";
import { useNavigate } from "react-router-dom";
import { removeHeaderToken } from "@/lib/axios-util";
import { useSessionStorage } from "usehooks-ts";
import { useGetUsers } from "@/hook/useUser";

export const useLogout = () => {
    const [, setAuthToken] = useSessionStorage('auth_token', null)
    const { refetch } = useGetUsers();
    const navigate = useNavigate()
    const { mutate: logoutUser } = useMutation({
        mutationFn: () => logOut(),
        onSuccess: () => {
            setAuthToken(null)
            removeHeaderToken()
            refetch()
            navigate("/login")
            console.log('navigate')
        }
    });

    return { logoutUser };
}