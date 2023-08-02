//@ts-nocheck
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const base_URL = 'http://localhost:3001/';

export const api = createApi({
    // tagTypes:['Users'],
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:base_URL
    }),

    endpoints:buider=>({
        getUsers:buider.query({
            query:() =>`/all-users?step=1`,
            // onCacheEntryAdded(response, { dispatch, getState }) {
            //     debugger
            //     const existingData = getState().api.endpoints.getUsers.data;
            //     const newData = response.data;
            //     const updatedData = [...existingData, ...newData];

            //     dispatch(
            //         api.util.updateQueryData(api.endpoints.getUsers,undefined,updatedData)
            //     )
            // },
        })
    })
})

export const { useGetUsersQuery,useLazyGetUsersQuery } = api;