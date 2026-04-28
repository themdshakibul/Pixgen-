export async function getTopGeneration() {
  const res = await fetch("https://pixgen-pi.vercel.app/data.json");
  const data = res.json();
  return data;
}

export async function getCategory() {
  const res = await fetch("https://pixgen-pi.vercel.app/category.json");
  const data = res.json();
  return data;
}
