import axios, { AxiosError, AxiosResponse } from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom";
import { config } from "../AppConfig";
import { AuthBody } from "../types/AuthBody";


export const useAuthenticate = (body:AuthBody) => {
    const nav = useNavigate();
    return axios.post(`${config.apiHostUrl}/authentication/authenticate`, body)
        .then(res => nav("/"));
};