import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const mockContentfulResponse = {
    openForCommissions: true,
  };
  return (
    <main className={styles.main}>
      <div className={styles.headerBlock}>
        <div className={styles.headerBlock}>
          <div>
            {mockContentfulResponse.openForCommissions ? (
              <span className={styles.commissionStatusOpen}>Open</span>
            ) : (
              <span className={styles.commissionStatusClosed}>Closed</span>
            )}{" "}
            for Commissions
          </div>
          <h1 className={styles.headerText}>Melissa Julie Anne Hicks</h1>
          <div className={styles.headerSubText}>
            <p>Traditional Artist</p>
            <p>Portraiture - Concept Art - Illustration</p>
          </div>
        </div>
      </div>
    </main>
  );
}
