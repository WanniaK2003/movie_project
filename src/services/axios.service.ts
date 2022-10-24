import axios, {AxiosResponse} from "axios";

import {baseURL, token} from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>


const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type':'application/json;charset=utf-8'
    }
})


export {axiosInstance}
