import Link from "next/link";
export default async function Header() {
  const url = "https://nice-dogs.vercel.app/api/dogs";

  const res = await fetch(url);

  const data = await res.json();

  return (
    <nav className="bg-black text-yellow-100 p-2">
      <ul className="flex gap-2 justify-center">
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>
        {data.map((name) => (
          <li key={name.slug}>
            <Link href={`/${name.slug}`} prefetch={false}>
              {name.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
