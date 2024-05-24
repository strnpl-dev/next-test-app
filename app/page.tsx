import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/productsList">
          <h2 className={styles.btn}>К списку товаров</h2>
        </Link>
      </div>
    </main>
  );
}
