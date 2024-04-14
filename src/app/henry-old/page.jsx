import Image from "next/image";

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
    <main className="md:flex max-w-7xl mx-auto">
      <Image
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        alt="A cute dog"
        width={3024}
        height={4032}
        priority={true} // disables lazy load
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         600px"
        className="w-full md:w-1/2 xl:w-[600px]"
      />
      <div>
        <h1>
          Mit navn er {data.name}
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quia quam libero unde vero voluptate recusandae dignissimos fugiat. Dolor eum, autem sunt laboriosam eaque fugit obcaecati accusamus nobis repellendus reprehenderit.</p>
        </h1>
      </div>
    </main>
  );
}
