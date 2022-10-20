import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../baseUrl";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => {
        return {
          url: "users",
          body: body,
          method: "POST",
        };
      },
    }),
    signIn: builder.query({
      query: () => "users",
    }),
  }),
});
export const { useSignUpMutation, useSignInQuery } = authApi;
