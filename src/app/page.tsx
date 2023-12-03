import Image from "next/image";
import css from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  return (
    <main className={`${css.main} ${inter.className}`}>
      <div className={css.homePage}>
        <div className={css.headerBlock}>
          <div>
            <p>Home - About - Gallery - Price List - Contact - Shop</p>
          </div>
          <h1 className={css.title}>Melissa Julie Anne Hicks</h1>
          <p className={css.subtitle}>Traditional Artist</p>
          <p className={css.subsubtitle}>
            Portraiture - Concept Art - Illustration
          </p>
        </div>
        <div className={css.imageBlock}></div>
      </div>
    </main>
  );
}
