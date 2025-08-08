import type { FunctionComponent, ReactNode } from "react";

interface GenericDialogProps {
  isModal?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}
const GenericDialog: FunctionComponent<GenericDialogProps> = ({
  isModal = true,
  setIsOpen,
  children,
}) => {
  return (
    <div className={`dialog-overlay ${isModal ? "modal" : "non-modal"}`}>
      <div className="dialog-content">
        {children}
        <button className="dialog-close" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default GenericDialog;
