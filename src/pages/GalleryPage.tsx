import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import styles from "./Gallery.module.scss";
import { useGetPaintingsQuery } from "@/services/galleryApi";
import Search from "@/components/search/Search";
import Card from "@/components/paintingCard/PaintingCard";
import Loader from "@/components/loader/Loader";
import { useTheme } from "@/provides/ThemeContext";

const GalleryPage: React.FC = () => {
  const {isDark} = useTheme()
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const limit = 6;

  const { data, isLoading } = useGetPaintingsQuery({ page, limit, query });

  if (isLoading) {
    return <Loader />
  }
  const totalPages = data?.total ? Math.ceil(data.total / limit) : 0;
  return (
    <div className={styles.container}>
      <Search query={query} setQuery={setQuery} setPage={setPage} />

      <div className={styles.paintings}>
        {data?.data.length === 0 ? (
          <div className={`${styles.noMatches} ${isDark ? styles.dark : styles.light}`}>
            <h1>No matches for <span>{query}</span></h1>
            <p>Please try again with a different spelling or keywords.</p>
          </div>
        ) : (
          data?.data.map((p) => (
            <Card painting={p} />
          ))
        )}
      </div>

      <Stack spacing={2} marginTop={2} alignItems="center">
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={page}
            shape="rounded"
            onChange={(_, num) => setPage(num)}
          />
        )}
      </Stack>
    </div>
  );
};

export default GalleryPage;
