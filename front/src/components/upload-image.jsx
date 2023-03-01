import { useState, useRef, useContext } from "react";
import { uploadImage } from "../api/aws";
import ThemeContext from "../context/context-theme";

const InputImage = ({ onLoaded, disabledButton }) => {
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadToS3 = async () => {
    if (file) {
      setLoading(true);
      const url = await uploadImage(file);

      onLoaded(url);
      setFile(null);
      ref.current.value = "";
      setLoading(false);
    }
  };

  const themeState = useContext(ThemeContext);
  let color = "";

  if (themeState.theme) {
    color = "text-bg-dark";

    if (disabledButton) {
      color = "text-bg-secondary border-0";
    }
  }

  return (
    <div className="d-flex gap-3 mt-2 align-items-end">
      <input
        className={`form-control ${color}`}
        type="file"
        id="formFile"
        onChange={handleFileSelect}
        accept="image/*"
        ref={ref}
        disabled={disabledButton}
      />
      {loading && <div class="spinner-border" role="status"></div>}
      {file && !loading && (
        <button className="btn btn-primary" type="button" onClick={uploadToS3}>
          Upload
        </button>
      )}
    </div>
  );
};

export default InputImage;
