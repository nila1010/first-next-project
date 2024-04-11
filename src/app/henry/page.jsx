async function getHenry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return data;
}

export default async function HenryPage() {
  const data = await getHenry();
  console.log(data);
  return (
    <main>
      <h1>Mit navn er {data.name}</h1>
      <h2>Min ynglingsfarve er {data.favouriteColor}</h2>
    </main>
  );
}
