import { notFound } from "next/navigation";
import Image from "next/image";
import { getDogBySlug, getAllDogs } from "@/lib/dogApi";

//Hvis vi skal "tvinge" den til at lave statiske sider
export async function generateStaticParams() {
  const pages = await getAllDogs();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });
  return paths;
}

export async function generateMetadata(params) {
  const { slug } = params;

  const data = await getDogBySlug(slug);

  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function DogPage({ params }) {
  const { slug } = params;

  const data = await getDogBySlug(slug);
  if (data.message) return notFound();

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <Image
        src={data.image.url}
        alt="A cute dog"
        width={data.image.width}
        height={data.image.height}
        priority={true} // disables lazy load
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         600px"
        className="w-full md:w-1/2 xl:w-[600px]"
      />
      <div style={{ backgroundColor: data.favouriteColor || "hotpink" }}>
        <h1>
          {data.name}
          <p>Han er {data.age}</p>
          <p>Hans farvorit farve {data.favouriteColor}</p>
        </h1>
      </div>
    </main>
  );
}
