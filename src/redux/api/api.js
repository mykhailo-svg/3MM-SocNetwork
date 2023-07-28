//@ts-nocheck

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const base_URL = 'https://vrrr.vercel.app/';

export const api = createApi({
    // tagTypes:['Users'],
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:base_URL
    }),

    endpoints:buider=>({
        getUsers:buider.query({
            query:() => '/all-users',
        })
    })
})

export const { useGetUsersQuery } = api;