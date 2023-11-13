import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>ONE PIECE THE MOVIE</h2>
          <h3 className={styles.hero__genre}>aksi-petualangan fantasi animasi </h3>
          <p className={styles.hero__description}>
          One Piece menceritakan petualangan seorang 'Bajak Laut Baik'
          </p>
        </div>
        <div className={styles.hero__right}></div>
        <img
          className={styles.hero__image}
          src="https://i.pinimg.com/originals/e6/d9/cb/e6d9cbc76e30d4e400919e3679478261.jpg"
          alt="poster bounty luffy"
        />
      </section>
    </div>
  );
}

export default Hero;
