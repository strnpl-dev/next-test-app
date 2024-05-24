import styles from "./productsList.module.css";
import globals from "../page.module.css";
import React from "react";
import next, { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  next: {
    revalidate: 60;
  }

  if (!response.ok) throw new Error("Unable to fetch products");

  return response.json();
}

export const metadata: Metadata = {
  title: "Products | Next App",
};

export default async function productsList() {
  const products = await getData();

  return (
    <>
      <div className={globals.container}>
        <Link href="/" className={`${globals.btn} ${styles.btn}`}>
          На главную
        </Link>
        <h1 className={styles.title}>Товары</h1>
        <div className={styles.items}>
          {products.map((product: any) => (
            <div key={product.id} className={styles.item}>
              <Link href={`/productsList/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.products__image}
                />
                <div className={styles.item__title}>{product.title}</div>
                <div className={styles.price}>{product.price}$</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
