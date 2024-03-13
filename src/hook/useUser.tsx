import { UseQueryResult, useQuery } from "react-query";
import { fetchUserData } from "@/services/api/User"
import { UserModel } from "@/models/UserModel";
import { useSessionStorage } from 'usehooks-ts'
import { setHeaderToken } from "@/lib/axios-util";

export const useGetUsers = (): UseQueryResult<UserModel | undefined, unknown> => {
    const [authToken] = useSessionStorage('auth_token', null)

    if (authToken) {
        setHeaderToken(authToken)
        console.log(authToken, 'set_authToken')
    }

    return useQuery(['user'], fetchUserData, { enabled: !!authToken });
}