import React from "react";
import styles from "./Movies.module.css";

const Movies = () => {
  const moviesData = [
    {
      title: "Poster Bounty",
      date: " Monky D Luffy",
      imageUrl: "https://i.pinimg.com/originals/3a/2c/05/3a2c05c762a9141f9c153f724115c104.jpg",
    },
    {
      title: "poster bounty ",
      date: "Roronoa Zoro",
      imageUrl: "https://i.pinimg.com/originals/2c/87/e2/2c87e2f5004bf2099c66442d90a47d61.jpg",
    },
    {
      title: "Poster Bounty ",
      date: "Vinsmoke Sanji",
      imageUrl: "https://i.pinimg.com/originals/3f/49/b3/3f49b3dd41ef4d6274c60a6a67e96161.jpg",
    },
    {
        title: "Poster Bounty Jinbe",
        date: "Release Date 4 ",
        imageUrl: "https://i.pinimg.com/originals/de/3d/1a/de3d1a534ddc7007416420bfdd545b63.jpg",
      },
      {
        title: "Poster Bounty",
        date: "Nico Robin",
        imageUrl: "https://i.pinimg.com/originals/e5/ad/d7/e5add73f943276678b097b561556ba39.jpg",
      },
      {
        title: "Poster Bounty",
        date: " God Ussop",
        imageUrl: "https://i.pinimg.com/originals/a9/3d/52/a93d5294e9256af446eb2fd194254790.jpg",
      },    {
        title: "Poster Bounty ",
        date: "Franky",
        imageUrl: "https://i.pinimg.com/originals/be/12/8e/be128ed2f6b00375abb1f991e53ad35e.jpg",
      },
      {
        title: "Poster Bounty",
        date: " Brook",
        imageUrl: "https://i.pinimg.com/originals/91/93/54/9193541cfb4ed39583b9d76c98aae91e.jpg",
      },
      {
        title: "Poster bounty ",
        date: "Nami",
        imageUrl: "https://i.pinimg.com/originals/00/64/8a/00648a874370ddfb1cb09c45f6646272.jpg",
      },
      {
        title: "Poster Bounty ",
        date: "Chopper",
        imageUrl: "https://i.pinimg.com/originals/c9/ee/66/c9ee6640bcfc45420c096be02edb866c.jpg",
      },
      {
        title: "Poster buronan",
        date: "Yamato",
        imageUrl: "https://i.pinimg.com/originals/b2/3c/27/b23c277a09dc46e9de2cf7f13e868179.jpg",
      },
      {
        title: "ONE PIECE the Movie",
        date: "One Piece RED",
        imageUrl: "https://i.pinimg.com/originals/75/a0/f7/75a0f72a0031cbd9b5d6efed2dca95c7.jpg",
      },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.movies__title}>Poster kru Mugiwara No Luffy</h2>
      <div className={styles.movies__container}>
        {moviesData.map((movie, index) => (
          <div key={index} className={styles.movie}>
            <img
              className={styles.movie__image}
              src={movie.imageUrl}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
