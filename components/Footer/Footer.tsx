import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  {
    id: 1,
    title: "Top Products",
    links: [
      {
        name: "Managed Website",
        url: "#",
      },
      {
        name: "Manage Reputation",
        url: "#",
      },
      {
        name: "Power Tools",
        url: "#",
      },
      {
        name: "Marketing Service",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    links: [
      {
        name: "Jobs",
        url: "#",
      },
      {
        name: "Assets Brands",
        url: "#",
      },
      {
        name: "Relations Investors",
        url: "#",
      },
      {
        name: "Service of terms",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Features",
    links: [
      {
        name: "Works",
        url: "#",
      },
      {
        name: "Brand Assets",
        url: "#",
      },
      {
        name: "Investor Relations",
        url: "#",
      },
      {
        name: "Terms of Service",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Resources",
    links: [
      {
        name: "Guides",
        url: "#",
      },
      {
        name: "Research",
        url: "#",
      },
      {
        name: "Experts",
        url: "#",
      },
      {
        name: "Agencies",
        url: "#",
      },
    ],
  },
];

const socials = [
  {
    id: 1,
    name: "Facebook",
    imgSrc: "/facebook.svg",
    imgAlt: "Facebook Logo",
    url: "#",
  },
  {
    id: 2,
    name: "Twitter",
    imgSrc: "/twitter.svg",
    imgAlt: "Twitter Logo",
    url: "#",
  },
  {
    id: 3,
    name: "Behance",
    imgSrc: "/behance.svg",
    imgAlt: "Behance Logo",
    url: "#",
  },
];

export function Footer() {
  return (
    <footer className="w-full h-[500px] bg-footer flex items-center justify-center">
      <div className="flex flex-col">
        <div className="flex items-start p-10 space-x-24">
          {navigation.map((item) => (
            <div key={item.id}>
              <h5 className="text-white font-brand text-lg">{item.title}</h5>
              <ul className="flex flex-col space-y-2 mt-4">
                {item.links.map((link) => (
                  <li key={link.name} className="text-gray-400">
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="text-white font-brand text-lg">Newsletter</h5>

            <div className="mt-4">
              <label htmlFor="newsletter-email" className="block text-gray-400">
                Stay update with our latest
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  className="opacity-50 block w-full min-w-0 flex-1 rounded-none rounded-l-md border-gray-300 px-3 py-2 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                />
                <span className="inline-flex items-center rounded-r-md border border-r-0 border-rose-500 bg-rose-500 px-3 text-white sm:text-sm">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-white px-10">
          <div>
            <p>
              Copyright &copy; 2022 All Rights reserved | This template is made
              with ❤️ by Colorlib
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            {socials.map((social) => (
              <div
                key={social.id}
                className="flex items-center justify-center bg-gray-400/50 hover:bg-rose-500 transition-colors ease-out duration-300 rounded"
              >
                <a href={social.url} className="w-full h-full p-2">
                  <Image
                    src={social.imgSrc}
                    alt={social.imgAlt}
                    width={14}
                    height={14}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
