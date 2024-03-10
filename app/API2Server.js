import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const APIserver = createApi({
  reducerPath: "APIserver",
  tagTypes: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/users" }),

  endpoints: (builder) => ({
    getuser: builder.query({
      query: () => ({
        url: "/",
        method: "get",
      }),
      providesTags: (result, err, arg) => [
        ...result?.map((ele) => ({ type: "user", id: ele.id })),
        { type: "user", id: "LIST" },
      ],
    }),

    getuserID: builder.query({
      query: () => ({
        url: "/",
        method: "get",
      }),
      providesTags: (result, err, arg) => [{ type: "user", id: arg }],
    }),

    updateuser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/${data.id}`,
        method: "put",
        body: rest,
      }),
      invalidatesTags: (result, err, { id }) => [{ type: "user", id }],
    }),

    deleteduser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, arr, arg) => [
        { type: "user", id: arg },
        { type: "user", id: "LIST" },
      ],
    }),
  }),
});
