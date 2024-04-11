async function getHenry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return data;
}

export async function generateMetadata() {
  const { name, age } = await getHenry();

  return {
    title: name,
    description: `${name} is ${age} years old`,
  };
}
export default async function HenryPage() {
  const data = await getHenry();
  return (
    <main>
      <h1>Mit navn er {data.name}</h1>
      <h2>Min ynglingsfarve er {data.favouriteColor}</h2>
    </main>
  );
}
