import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { locationUrl } from "../baseUrl";
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
