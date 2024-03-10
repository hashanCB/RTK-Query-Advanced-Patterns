"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiServer = createApi({
  reducerPath: "ApiServer",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/users",
  }),

  endpoints: (builder) => ({
    getPet: builder.query({
      query: () => ({
        // Changed to empty parenthesis as no argument is needed
        url: `/`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [
        ...(result?.map((ele) => ({ type: "user", id: ele.id })) ?? []),
        { type: "user", id: "LIST" },
      ],
    }),

    getuserid: builder.query({
      query: (userId) => ({
        // Changed argument name to userId for clarity
        url: `/${userId}`,
        method: "GET",
      }),

      providesTags: (result, err, arg) => [{ type: "user", id: arg }],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: () => [{ type: "user", id: "LIST" }], // Removed logging and fixed function
    }),

    updateUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/${id}`,
        method: "PUT", // or 'PATCH' if you're doing partial updates
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "user", id }],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "user", id },
        { type: "user", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetPetQuery,
  useGetuseridQuery,
  useAddPostMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = ApiServer;
