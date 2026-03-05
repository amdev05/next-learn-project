import Link from "next/link";

const projects = [
  {
    title: "Apple Mac Page",
    href: "apple",
  },
  {
    title: "Fakestore",
    href: "fakestore",
  },
];

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="bg-[#f5f5f7] py-28">
          <div className="mx-[6.25dvw] max-w-md">
            <h1 className="text-xl font-semibold">Next Learn Project</h1>
          </div>

          <div className="mx-[6.25dvw] max-w-md mt-7">
            <ul className="flex flex-col gap-y-2.5">
              {projects.map((card, index) => (
                <li className="rounded-xl overflow-hidden bg-white shadow-sm  group hover:shadow-lg transition" key={index}>
                  <Link href={card.href} className="block w-full relative p-4">
                    <h3 className="">{card.title}</h3>

                    <span className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="-rotate-45 group-hover:rotate-0 transition">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
