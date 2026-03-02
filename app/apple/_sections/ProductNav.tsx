import Link from "next/link";

interface Data {
  id: number;
  title: string;
  image: string;
  slug: string;
}

interface DataProps {
  data: Data[];
}

export default function ProductNav({ data }: DataProps) {
  return (
    <nav className="">
      <div className="w-fit relative px-9 mx-auto">
        <ul className="flex py-4 overflow-x-auto bar scrollbar-hide ">
          {data.map((nav, index) => (
            <li className="px-5 first:pl-0 last:pl-0" key={index}>
              <Link href={`/apple/${nav.slug}`} className="group flex flex-col justify-end items-center">
                <figure className="w-max mb-2.5 pt-2.5">
                  <img src={nav.image} alt={nav.slug} className="h-14 object-contain shrink-0 mx-auto group-hover:scale-105 transition duration-300" />
                </figure>
                <span className="text-nowrap text-sm font-playfair">{nav.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="">
          <button type="button" className="absolute top-1/2 -translate-y-1/2 right-0 h-24 w-9 flex justify-center items-center cursor-pointer shadow-[-6px_0_10px_-8px_rgba(0,0,0,0.1)]">
            <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentcolor"
                d="m4.748 6.5001s0-.0001 0-.0001l-4.4336-4.877c-.3438-.3789-.3164-.9649.0625-1.3086s.9648-.3174 1.3086.0625l5 5.5c.3213.3535.3213.8927 0 1.2462l-5 5.5c-.3438.3799-.9297.4062-1.3086.0625s-.4062-.9297-.0625-1.3086l4.4336-4.877z"
              ></path>
            </svg>
          </button>
          <button type="button" className="absolute top-1/2 -translate-y-1/2 left-0 h-24 w-9 flex justify-center items-center cursor-pointer shadow-[6px_0_10px_-8px_rgba(0,0,0,0.1)]">
            <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentcolor"
                d="m2.252 6.5001s0-.0001 0-.0001l4.4336-4.877c.3438-.3789.3164-.9648-.0625-1.3086s-.9648-.3174-1.3086.0625l-5 5.5c-.3212.3535-.3212.8927 0 1.2462l5 5.5c.3438.3799.9297.4062 1.3086.0625s.4062-.9297.0625-1.3086z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
