import { useRef, type FunctionComponent } from "react";
import { ConfirmDialog } from "./components/confirmDialog.component";
import { type GenericDialogHandle } from "./components/genericDialog.component";
import { ImageDialog } from "./components/imageDialog.component";
import { ModalDialog } from "./components/modalDialog.component";
import { RegularDialog } from "./components/regularDialog.component";

const App: FunctionComponent = () => {
  const modalRef = useRef<GenericDialogHandle>(null);
  const regularRef = useRef<GenericDialogHandle>(null);
  const confirmRef = useRef<GenericDialogHandle>(null);
  const imageRef = useRef<GenericDialogHandle>(null);

  const openDialog = (ref: React.RefObject<GenericDialogHandle | null>) => {
    closeDialogs();
    ref.current?.open();
  };
  const closeDialogs = () => {
    modalRef.current?.close();
    regularRef.current?.close();
    confirmRef.current?.close();
    imageRef.current?.close();
  };

  return (
    <>
      <h1>Generic Dialog Demo</h1>
      <button onClick={() => openDialog(modalRef)}>Open Modal Dialog</button>
      <button onClick={() => openDialog(regularRef)}>
        Open Regular Dialog
      </button>
      <br />
      <button onClick={() => openDialog(confirmRef)}>
        Remove Confirmation Dialog
      </button>
      <br />
      <button onClick={() => openDialog(imageRef)}>Open Image Viewer</button>

      <ModalDialog modalRef={modalRef} />
      <RegularDialog regularRef={regularRef} />
      <ConfirmDialog confirmRef={confirmRef} />
      <ImageDialog imageRef={imageRef} />
    </>
  );
};

export default App;
