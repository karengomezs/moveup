import 'photoswipe/dist/photoswipe.css';
import styles from './styles.module.scss';
import { Gallery } from 'react-photoswipe-gallery';
import ImageGallery from './image';

const Grid = ({ product }) => {
  return (
    <Gallery>
      <div className="flex-grow-1 w-100 d-flex gap-2">
        <ImageGallery
          className="flex-grow-1 object-fit-cover rounded"
          imageUrl={product?.imagenes[0].url}
        />
        <div className={styles.container}>
          {product?.imagenes.map((image, i) => {
            if (i !== 0) {
              return (
                <ImageGallery
                  key={image.id}
                  className="object-fit-cover w-100 h-100 rounded"
                  imageUrl={image.url}
                />
              );
            }
            return undefined;
          })}
        </div>
      </div>
    </Gallery>
  );
};

export default Grid;
