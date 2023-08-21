import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
    reducerPath:'admin',
    baseQuery : fetchBaseQuery({ baseUrl : `http://localhost:8080/`}),
    endpoints : (builder) =>({
        getAccounts: builder.query({
            // query : (name) => `accounts/${name}`,
            query : (name) => `accounts`,
            transformResponse:(response)=>response.sort((a,b)=>a.amount-b.amount),
            providesTags:['accounts'],
            // invalidatesTags:['accounts']
        }),
        addAccount: builder.mutation({
            // query : (name) => `accounts/${name}`,
            query : (amount,id) => ({
                url:'accounts',
                method:'POST',
                body:{amount,id}
            }),
            // providesTags:['accounts'],
            invalidatesTags:['accounts']  // used tags
        }),
        deleteAccount: builder.mutation({
            // query : (name) => `accounts/${name}`,
            query : (id) => ({
                url:`accounts/${id}`,
                method:'DELETE',
            }),
            // providesTags:['accounts'],
            invalidatesTags:['accounts']  // used tags
        }),
        updateAccount: builder.mutation({
            // query : (name) => `accounts/${name}`,
            query : ({id,amount}) => ({
                url:`accounts/${id}`,
                method:'PATCH',
                body:{amount}
            }),
            // providesTags:['accounts'],
            invalidatesTags:['accounts']  // used tags
        }),
        
       
    })
})

// auto generated hooks 
export const { useGetAccountsQuery, useAddAccountMutation, useDeleteAccountMutation, useUpdateAccountMutation} = adminApi;