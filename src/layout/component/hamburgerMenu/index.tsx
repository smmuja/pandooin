import { Modal } from "component";
import { navlink } from "config";
import Link from "next/link";
import { useState } from "react";

export function HamburgerMenu() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <>
        <div
          onClick={() => setModalOpen(true)}
          className="bg-white-paper lg:hidden"
        >
          <button className="text-sm mt-1 text-slate-600">
            <img
              src="/assets/svg/common-hamburger-button.svg"
              alt="Hamburger button"
            />
          </button>
        </div>
        {isModalOpen && (
          <Modal
            onClose={() => setModalOpen(false)}
            isOpen={true}
            className="top-0 right-0 m-0 p-0 -7 absolute justify-start h-full bg-white-paper "
          >
            <div
              className="absolute right-0 bg-white-paper flex flex-col justify-around items-end px-3 w-3/4 h-full my-0 py-0
             "
            >
              <div>
                <img src="/assets/svg/common-hamburger-close.svg" alt="" />
              </div>
              <div className="flex flex-col items-end gap-5">
                {navlink.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className=" p-1 px-3 bg-blue-500 hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div>
                <div>
                  <button className="rounded-full border-2 border-dark-green text-dark-green p-2 px-4 hover:text-white-paper hover:bg-dark-green ">
                    Need Assistance?
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </>
    </>
  );
}
