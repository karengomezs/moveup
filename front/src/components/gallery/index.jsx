import 'photoswipe/dist/photoswipe.css';
import styles from './styles.module.scss';
import { Gallery, Item } from 'react-photoswipe-gallery';

const Grid = ({ product }) => {
  return (
    <Gallery>
      <div className="flex-grow-1 w-100 d-flex gap-2">
        <Item
          original={product?.imagenes[0].url}
          thumbnail={product?.imagenes[0].url}
          width="600"
          height="800"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <img
              src={product?.imagenes[0].url}
              ref={ref}
              onClick={open}
              alt=""
              className="flex-grow-1 object-fit-cover rounded"
            />
          )}
        </Item>

        <div className={styles.container}>
          {product?.imagenes.map((image, i) => {
            if (i !== 0) {
              return (
                <Item
                  original={image.url}
                  thumbnail={image.url}
                  width="600"
                  height="400"
                  alt="Photo of mountain lake by Samuel Rohl"
                >
                  {({ ref, open }) => (
                    <img
                      className="object-fit-cover w-100 h-100 rounded"
                      src={image.url}
                      ref={ref}
                      onClick={open}
                      alt=""
                    />
                  )}
                </Item>
              );
            }
          })}
        </div>
      </div>
    </Gallery>
  );
};

export default Grid;
