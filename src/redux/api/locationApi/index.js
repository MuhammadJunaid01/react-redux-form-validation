import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { locationUrl } from "../baseUrl";
/* Creating a reducer and a hook. */
export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: locationUrl,
  }),
  endpoints: (builder) => ({
    getUserLocation: builder.query({
      query: () => "",
    }),
  }),
});
export const { useGetUserLocationQuery } = locationApi;
