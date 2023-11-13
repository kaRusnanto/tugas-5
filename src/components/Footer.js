import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>ONE PIECE</h2>
        <p className={styles.footer__author}>
          AYU<span className={styles.author__name}>_MOVIE</span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
