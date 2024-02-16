import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


type UploadResponse = { data: string };
type blogPost = any;
type GetPostParams = any;
type SearchPostsParams = { search: string; categorie?: string };

const baseQuery = fetchBaseQuery({ baseUrl: "/api/post/" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPost: builder.query<blogPost, void>({
      query: () => "getpost",
    }),
    getPostById: builder.query<blogPost, GetPostParams>({
      query: (params) => `${params.id}`, // Adjust the route according to your API
    }),
    searchPostsByCategory: builder.query<blogPost, SearchPostsParams>({
      query: ({ search, categorie }) => ({
        url: "getpost",
        params: { search: search, categorie: categorie },
      }),
    }),
    addPost: builder.mutation<
      { data: blogPost },
      { title: string; article: string; imageurl: string; categorie: string }
    >({
      query: (newPostData) => ({
        url: "addpost",
        method: "POST",
        body: newPostData,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation<{ data: blogPost }, { id: string; updatedPostData: Partial<blogPost> }>({
      query: ({ id, updatedPostData }) => ({
        url: `${id}`,
        method: "PUT",
        body: updatedPostData,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation<{ data: any }, { id: string }>({
      query: ({ id }) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    uploadFile: builder.mutation<UploadResponse, FormData>({
      query: (formData) => ({
        url: "upload",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetPostQuery,
  useAddPostMutation,
  useGetPostByIdQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useUploadFileMutation,
  useSearchPostsByCategoryQuery,
} = apiSlice;
