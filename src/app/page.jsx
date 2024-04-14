import Link from "next/link";
export const dynamic = "force-dynamic";
export const metaData = {
  title: "Frontpage",
  description: "Description",
};

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return (
    <main className="grid place-content-center mt-6">
      <h1>Lets get startet</h1>
      <img src={data.message} alt="hej" />
    </main>
  );
}
