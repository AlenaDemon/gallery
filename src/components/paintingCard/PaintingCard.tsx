import { Painting } from "@/services/galleryApi";
import React from "react";
import path from "../routes/path";
import styles from './PaintingCard.module.scss'
import { useTheme } from "@/provides/ThemeContext";
interface ICard {
  painting: Painting;
}
// export interface Painting {
//   imageUrl: string;
//   id: number;
//   name: string;
//   authorId: number;
//   locationId: number;
//   created: string;
// }

//// authorId:1, created: "1850", id: 1, imageUrl: "/images/The_ninth_wave.jpeg", locationId: 1,name: "The ninth wave"
const Card: React.FC<ICard> = ({painting}) => {
  const {isDark} = useTheme()

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={path.getImgUrl(painting.imageUrl)} alt={painting.name} width='100%'/>
        <div className={`${styles.overlay} ${isDark ? styles.dark : styles.light}`}>
          <div className={styles.name}>
            <h3>{painting.name}</h3>
            <p>{painting.created}</p>
          </div>
          <div className={styles.author}>
            <h3>{painting.authorId} Peter </h3>
            <p>{painting.locationId} 1234</p>
          </div>
          <div className={`${styles.line} ${isDark ? styles.darkLine : styles.lightLine}`}></div>
        </div>

      </div>
      
    </div>
  )
}

export default Card;