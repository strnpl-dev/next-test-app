"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Ой... {error.message}</h1>;
}
