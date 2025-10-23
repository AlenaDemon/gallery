import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import path from "@/routes/path";

export interface Painting {
  imageUrl: string;
  id: number;
  name: string;
  authorId: number;
  locationId: number;
  created: string;
}

export interface Author {
  id: number;
  name: string;
}

export interface Location {
  id: number;
  location: string;
}

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({ baseUrl: path.baseUrl }),
  endpoints: (builder) => ({
    getPaintings: builder.query<
      { data: Painting[]; total: number },
      { page: number; limit: number; query?: string }
    >({
      query: ({ page, limit, query }) => ({
        url: "paintings",
        params: { _page: page, _limit: limit, q: query },
      }),
      transformResponse: (response: Painting[], meta) => {
        const total = meta?.response?.headers.get("x-total-count") || 0;
        return { data: response, total: Number(total) };
      },
    }),
    getAuthors: builder.query<Author[], void>({
      query: () => "authors",
    }),
    getLocations: builder.query<Location[], void>({
      query: () => "locations",
    }),
  }),
});

export const { useGetPaintingsQuery, useGetAuthorsQuery, useGetLocationsQuery } = galleryApi;
