import { useQuery } from "react-query";
import { fetchUserData } from "@/services/api/User"

const key = 'users'

export const useGetUsers = () => {
    return useQuery([key], fetchUserData);
}