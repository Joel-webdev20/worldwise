import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer}>
        &copy; Copyright {new Date().getFullYear()}
        WorldWise Inc
      </p>
    </footer>
  );
}

export default Footer;
