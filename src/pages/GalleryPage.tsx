import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import styles from "./Gallery.module.scss";
import { useGetPaintingsQuery } from "@/services/galleryApi";
import Search from "@/components/search/Search";

const GalleryPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const limit = 6;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const { data, isLoading, isError } = useGetPaintingsQuery({ page, limit, query });

  const totalPages = data?.total ? Math.ceil(data.total / limit) : 0;

  return (
    <div className={styles.container}>
      <Search query={query} setQuery={setQuery} setPage={setPage} />

      <div className={styles.paintings}>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Ошибка загрузки данных</p>
        ) : data?.data.length === 0 ? (
          <p>Нет результатов</p>
        ) : (
          data?.data.map((p) => (
            <div key={p.id} className={styles.card}>
              {p.imageUrl && <img src={`${baseUrl}${p.imageUrl}`} alt={p.name} width="100%" />}
            </div>
          ))
        )}
      </div>

      <Stack spacing={2} marginTop={2} alignItems="center">
        {totalPages > 0 && (
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
