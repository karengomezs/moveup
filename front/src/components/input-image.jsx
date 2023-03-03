import { useState, useRef } from "react";
import INPUT from "./common/input";
import { postImages } from "../api/aws";

function InputImage({
  setArrayImages,
  arrayImages,
  imagesError,
  setImagesError,
}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const clearInput = useRef();

  return (
    <div className="my-4">
      <label htmlFor="formFile" className="form-label">
        Elige las imágenes del producto
      </label>
      <div className="d-flex gap-3 w-100 align-items-start">
        <div className="w-100">
          <INPUT
            disabled={arrayImages.length > 4 || loading}
            ref={clearInput}
            onChange={(e) => {
              setFile(e.target.files[0]);
              setImagesError(false);
            }}
            className={`form-control ${imagesError ? "is-invalid" : ""}`}
            type="file"
            id="formFile"
            accept="image/*"
          />
          <div className="invalid-feedback">Por favor ingrese 5 imágenes</div>
        </div>

        {file !== null && !loading && (
          <button
            type="button"
            className="btn btn-primary d-block w-10"
            onClick={async () => {
              setLoading(true);
              const result = await postImages(file);
              setArrayImages([...arrayImages, result]);
              setLoading(false);
              setFile(null);
              clearInput.current.value = "";
            }}
          >
            Cargar
          </button>
        )}
        {loading && (
          <div>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputImage;
