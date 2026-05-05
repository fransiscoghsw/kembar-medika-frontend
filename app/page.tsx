const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products?populate=*`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("API ERROR:", text);
      return [];
    }

    const data = await res.json();
    return data.data ?? [];
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return [];
  }
}
