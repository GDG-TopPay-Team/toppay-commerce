import Head from "next/head";
import styles from "../styles/Home.module.css";
import { products } from "../mocks/data";
import ShoppingCounter from "../components/ShoppingCounter";
import ProductItem from "../components/ProductItem";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Headphone Shop 🎧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ShoppingCounter />

      <main className={styles.main}>
        <h1 className={styles.title}>Headphone Store 🎧</h1>
        <div className={styles.grid}>
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} data={product} />
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
