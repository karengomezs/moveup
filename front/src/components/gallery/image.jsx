import { useEffect, useState } from "react";
import { Item } from "react-photoswipe-gallery";

const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
    });
  };
};

const ImageGallery = ({ imageUrl, className }) => {
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
  }, [imageUrl]);

  return (
    <>
      {Object.keys(imageDimensions).length > 0 && (
        <>
          <Item
            original={imageUrl}
            thumbnail={imageUrl}
            width={imageDimensions.width}
            height={imageDimensions.height}
            alt=""
          >
            {({ ref, open }) => (
              <img
                src={imageUrl}
                ref={ref}
                onClick={open}
                alt=""
                className={className}
              />
            )}
          </Item>
        </>
      )}
    </>
  );
};

export default ImageGallery;
