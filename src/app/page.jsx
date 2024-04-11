import Link from "next/link";
export const metaData = {
  title: "Frontpage",
  description: "Description",
};

export default function Home() {
  return (
    <main className="grid place-content-center mt-6">
      <Link className="text-white bg-slate-400 p-3 text-center rounded-md " href={"/henry"}>
        Henry
      </Link>
      <h1>Lets get startet</h1>
    </main>
  );
}
