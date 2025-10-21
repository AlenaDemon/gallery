import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Painting {
  imageUrl: string;
  id: number;
  name: string;
  authorId: number;
  locationId: number;
  created: string;
}
// authorId:1, created: "1850", id: 1, imageUrl: "/images/The_ninth_wave.jpeg", locationId: 1,name: "The ninth wave"

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
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
  }),
});

export const { useGetPaintingsQuery } = galleryApi;
