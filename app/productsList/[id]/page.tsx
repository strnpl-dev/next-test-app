import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import globals from "../../page.module.css";

async function getData(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  next: {
    revalidate: 60;
  }
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const product = await getData(id);
  return {
    title: product.title,
  };
}

export default async function Product({ params: { id } }: Props) {
  const product = await getData(id);

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={`${globals.btn} ${styles.btn}`}>
          На главную
        </Link>
        <Link href="/productsList" className={`${globals.btn} ${styles.btn}`}>
          К списку товаров
        </Link>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <h3>{product.description}</h3>
        <h3>{product.price}$</h3>
      </div>
    </>
  );
}
