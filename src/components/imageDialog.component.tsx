import type { FunctionComponent } from "react";
import React, { useState } from "react";
import {
  GenericDialog,
  type GenericDialogHandle,
} from "./genericDialog.component";

const images: string[] = [
  "/earth.jpg",
  "/jupiter.jpg",
  "/mars.jpg",
  "/uranus.png",
];

export const ImageDialog: FunctionComponent<{
  imageRef: React.RefObject<GenericDialogHandle | null>;
}> = ({ imageRef }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <GenericDialog
      ref={imageRef}
      isModal={false}
      header={
        <div className="dialog-header-flex">
          <h3>Gallery</h3>
          <button type="button" onClick={() => imageRef.current?.close()}>
            ✖
          </button>
        </div>
      }
      body={
        <div style={{ textAlign: "center" }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "90%",
              maxHeight: "400px",
              borderRadius: "8px",
            }}
          />
        </div>
      }
      footer={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {images.map((img) => (
            <img
              key={img}
              src={img}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer",
                border:
                  img === selectedImage
                    ? "2px solid blue"
                    : "2px solid transparent",
              }}
              onClick={() => {
                setSelectedImage(img);
              }}
            />
          ))}
        </div>
      }
    />
  );
};
