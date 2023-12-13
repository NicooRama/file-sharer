import {baseUrl} from "@/src/core/constants";
import {cookies} from "next/headers";

export const authorizationHeaders = () => ({
    headers: {
        Authorization: `Bearer ${cookies().get('next-auth.session-token')?.value}`
    }
})

export const api = {
    get: async (url: string, config: RequestInit = {}) => {
        const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            ...config,
        });
        const data = await response.json();
        return {data}
    },
    put: async (url: string, body: any, config: RequestInit = {}) => {
        const response = await fetch(`${baseUrl}${url}`, {
            method: 'PUT',
            ...config,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        return {data}
    },
}

