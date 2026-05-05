"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/api/products?populate=*`);
        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Kembar Medika Safety
      </h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {products.map((item: any) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
