import {
  useImperativeHandle,
  useState,
  type FunctionComponent,
  type ReactNode,
} from "react";

export interface GenericDialogHandle {
  open: () => void;
  close: () => void;
}

interface GenericDialogProps {
  ref: React.Ref<GenericDialogHandle>;
  isModal?: boolean;
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}
export const GenericDialog: FunctionComponent<GenericDialogProps> = ({
  ref,
  isModal = true,
  header,
  body,
  footer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  if (!isOpen) return <></>;

  return (
    <div className={`dialog-overlay ${isModal ? "modal" : "non-modal"}`}>
      <div className="dialog-content">
        {header && <div className="dialog-header">{header}</div>}
        {body && <div className="dialog-body">{body}</div>}
        {footer && <div className="dialog-footer">{footer}</div>}
      </div>
    </div>
  );
};
