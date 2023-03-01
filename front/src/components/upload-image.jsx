import { useState, useRef } from "react";
import { uploadImage } from "../api/aws";

const InputImage = ({ onLoaded }) => {
  const ref = useRef();
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadToS3 = async () => {
    if (file) {
      const url = await uploadImage(file);

      onLoaded(url);
      setFile(null);
      ref.current.value = "";
    }
  };

  return (
    <div className="d-flex gap-3 mt-2 align-items-end">
      <input
        class="form-control"
        type="file"
        id="formFile"
        onChange={handleFileSelect}
        accept="image/*"
        ref={ref}
      />

      {file && (
        <button className="btn btn-primary" type="button" onClick={uploadToS3}>
          Upload
        </button>
      )}
    </div>
  );
};

export default InputImage;
