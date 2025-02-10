import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getTestimonilas: builder.query({
      query: () => "/testimonials",
    }),
  }),
});

export const { useGetPostsQuery, useGetTestimonilasQuery } = api;
