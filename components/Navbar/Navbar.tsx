import clsx from "clsx";
import { useRouter } from "next/router";
import {
  BookOpenIcon,
  CakeIcon,
  ChatBubbleOvalLeftIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export function Navbar() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      name: "Home",
      icon: HomeIcon,
      href: "/",
      isActive: router.pathname === "/",
    },
    {
      id: 2,
      name: "About",
      icon: CakeIcon,
      href: "/about",
      isActive: router.pathname === "/about",
    },
    {
      id: 3,
      name: "Menu",
      icon: BookOpenIcon,
      href: "/menu",
      isActive: router.pathname === "/menu",
    },
    {
      id: 4,
      name: "Book Table",
      icon: PhoneIcon,
      href: "/book-table",
      isActive: router.pathname === "/book-table",
    },
    {
      id: 5,
      name: "Contact",
      icon: ChatBubbleOvalLeftIcon,
      href: "/contact",
      isActive: router.pathname === "/contact",
    },
  ];

  return (
    <nav>
      <ul className="mt-8">
        {links.map((link) => (
          <li
            key={link.id}
            className={clsx(
              "hover:text-white hover:bg-rose-500 transition-colors ease-in-out duration-300",
              link.isActive ? "bg-rose-500 text-white" : "text-gray-600"
            )}
          >
            <a
              className="flex items-center space-x-2 px-2 py-3.5"
              href={link.href}
            >
              <span>
                <link.icon className="w-5 h-5" />
              </span>
              <span className="text-xs">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
