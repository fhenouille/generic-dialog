import { useRef, type FunctionComponent } from "react";
import {
  GenericDialog,
  type GenericDialogHandle,
} from "./components/genericDialog";

const App: FunctionComponent = () => {
  const modalRef = useRef<GenericDialogHandle>(null);
  const regularRef = useRef<GenericDialogHandle>(null);

  return (
    <>
      <h1>Generic Dialog Demo</h1>
      <button
        onClick={() => {
          regularRef.current?.close();
          modalRef.current?.open();
        }}
      >
        Open Modal Dialog
      </button>
      <button onClick={() => regularRef.current?.open()}>
        Open Regular Dialog
      </button>
      <GenericDialog
        ref={modalRef}
        header={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
      <GenericDialog
        ref={regularRef}
        isModal={false}
        header={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Regular Dialog</h2>
            <button onClick={() => regularRef.current?.close()}>✖</button>
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
    </>
  );
};

export default App;
