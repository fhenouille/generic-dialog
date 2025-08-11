import type { FunctionComponent } from "react";
import {
  GenericDialog,
  type GenericDialogHandle,
} from "./genericDialog.component";

export const RegularDialog: FunctionComponent<{
  regularRef: React.RefObject<GenericDialogHandle | null>;
}> = ({ regularRef }) => {
  return (
    <GenericDialog
      ref={regularRef}
      isModal={false}
      header={
        <div className="dialog-header-flex">
          <h2>Regular Dialog</h2>
          <button type="button" onClick={() => regularRef.current?.close()}>
            ✖
          </button>
        </div>
      }
      body={
        <p>
          The component can be used as a regular dialog
          <br />
          (the user can still interact with the rest of the page)
        </p>
      }
      footer={<span>Non-Modal Footer</span>}
    />
  );
};
