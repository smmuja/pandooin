import { useEffect, useRef, useState } from "react";
import { ModalProps } from "./type";
import { twMerge } from "tailwind-merge";

export function Modal(props: ModalProps) {
  const { isOpen, onClose, children, className } = props;

  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-65 flex items-center justify-center overflow-ellipsis inset-0"
        onClick={onClose}
      >
        <div
          className={twMerge(
            "flex flex-col bg-white-paper p-5 rounded-md relative w-10/12 h-3/4 max-w-full cursor-zoom-out items-center justify-center box-border",
            className
          )}
          onClick={onClose}
        >
          {children}
        </div>
      </div>
    </>
  );
}
