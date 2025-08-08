import type { FunctionComponent } from "react";
import {
  GenericDialog,
  type GenericDialogHandle,
} from "./genericDialog.component";

export const ModalDialog: FunctionComponent<{
  modalRef: React.RefObject<GenericDialogHandle | null>;
}> = ({ modalRef }) => {
  return (
    <GenericDialog
      ref={modalRef}
      header={
        <div className="dialog-header-flex">
          <h2>Modal Dialog</h2>
          <button onClick={() => modalRef.current?.close()}>✖</button>
        </div>
      }
      body={
        <p>
          The component can be used as a modal
          <br />
          (the user has to close it before being able
          <br />
          to interact with the rest of the webpage).
        </p>
      }
      footer={<span>Modal Footer</span>}
    />
  );
};
