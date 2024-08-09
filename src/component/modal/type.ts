export type ModalProps = {
  isOpen: boolean;
  hasCloseButton?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};
