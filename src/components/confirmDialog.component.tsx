import type { FunctionComponent } from "react";
import {
  GenericDialog,
  type GenericDialogHandle,
} from "./genericDialog.component";

export const ConfirmDialog: FunctionComponent<{
  confirmRef: React.RefObject<GenericDialogHandle | null>;
}> = ({ confirmRef }) => {
  return (
    <GenericDialog
      ref={confirmRef}
      body={
        <>
          <h2>Confirm Deletion</h2>
          <p>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
          <button onClick={() => confirmRef.current?.close()}>Cancel</button>
          <button onClick={() => confirmRef.current?.close()} color="error">
            Delete
          </button>
        </>
      }
    />
  );
};
