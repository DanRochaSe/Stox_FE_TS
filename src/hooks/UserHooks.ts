import axios, { AxiosError } from "axios"
import { useQuery } from "react-query"
import { config } from "../AppConfig";
import { Claim } from "../types/Claim"

const useFetchUser = () => {
    return useQuery<Claim[], AxiosError>("user", () => 
        axios
            .get(`${config.apiHostUrl}/authentication/GetUserClaims?slide=false`)
            .then((res) => res.data)

    );
};


export default useFetchUser;