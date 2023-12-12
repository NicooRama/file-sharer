import axios from "axios";
import {baseUrl} from "@/src/core/constants";

export const api = axios.create({
    baseURL: baseUrl,
});
