import { Author, Painting, Location } from "@/services/galleryApi"; 
import React, { useState } from "react";
import path from "../../routes/path";
import styles from "./PaintingCard.module.scss";
import { useTheme } from "@/provides/ThemeContext";
import Loader from "@/components/loader/Loader";

interface ICard {
  painting: Painting;
  authors: Author[] | void;
  locations: Location[] | void;
}

const Card: React.FC<ICard> = ({ painting, authors, locations }) => {
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  const auth = authors?.find(({ id }) => id === painting.authorId);
  const location = locations?.find(({ id }) => id === painting.locationId);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {!isLoaded && (
          <div className={styles.loaderWrapper}>
            <Loader /> {/* Можно передать размер или стиль */}
          </div>
        )}

        <img
          src={path.getImgUrl(painting.imageUrl)}
          alt={painting.name}
          width="100%"
          style={{ display: isLoaded ? "block" : "none" }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />

        {isLoaded && (
          <div className={`${styles.overlay} ${isDark ? styles.dark : styles.light}`}>
            <div className={styles.name}>
              <h3>{painting.name}</h3>
              <p>{painting.created}</p>
            </div>
            <div className={styles.author}>
              <h3>{auth?.name}</h3>
              <p>{location?.location}</p>
            </div>
            <div className={`${styles.line} ${isDark ? styles.darkLine : styles.lightLine}`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
