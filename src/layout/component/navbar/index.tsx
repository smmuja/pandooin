import Link from "next/link";
import { navlink } from "config";
import Image from "next/image";
import { HamburgerMenu } from "../hamburgerMenu";

export function Navbar() {
  return (
    <>
      <nav className="bg-white-smoke flex justify-between lg:justify-around items-center px-3 sticky top-0 text-green-tosca font-semibold z-10">
        <Link href="/">
          <Image
            src="/assets/logo/zamrood-logo-text.png"
            alt="zamrud logo"
            width={135}
            height={50}
          />
        </Link>
        <HamburgerMenu />
        <div className="lg:flex gap-3 py-3 hidden">
          {navlink.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className=" p-1 px-3 bg-blue-500 hover:underline"
            >
              {item.title}
            </Link>
          ))}
          <button className="rounded-full border-2 border-dark-green text-dark-green p-2 px-4 hover:text-white-paper hover:bg-dark-green ">
            Need Assistance?
          </button>
        </div>
      </nav>
    </>
  );
}
