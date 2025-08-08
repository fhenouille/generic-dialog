import { useState, type FunctionComponent } from "react";
import GenericDialog from "./components/genericDialog";

const App: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegularOpen, setIsRegularOpen] = useState(false);

  return (
    <>
      <h1>Generic Dialog Demo</h1>
      <button
        onClick={() => {
          setIsRegularOpen(false);
          setIsModalOpen(true);
        }}
      >
        Open Modal Dialog
      </button>
      <button
        onClick={() => {
          setIsModalOpen(false);
          setIsRegularOpen(true);
        }}
      >
        Open Regular Dialog
      </button>
      {isModalOpen && (
        <GenericDialog setIsOpen={setIsModalOpen}>
          <div>
            <h2>Modal Dialog</h2>
            <p>
              The component can be used as a modal
              <br />
              (the user has to close it before being able
              <br />
              to interact with the rest of the webpage).
            </p>
          </div>
        </GenericDialog>
      )}
      {isRegularOpen && (
        <GenericDialog isModal={false} setIsOpen={setIsRegularOpen}>
          <div>
            <h2>Regular Dialog</h2>
            <p>
              The component can be used as a regular dialog
              <br />
              (the user can still interact with the rest of the page)
            </p>
          </div>
        </GenericDialog>
      )}
    </>
  );
};

export default App;
