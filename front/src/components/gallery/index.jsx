import "photoswipe/dist/photoswipe.css";
import styles from "./styles.module.scss";
import { Gallery, Item } from "react-photoswipe-gallery";

const Grid = ({ product }) => {
  // console.log(product?.imagenes);
  return (
    <Gallery>
      <div className={styles.container}>
        <Item
          original={product?.imagenes[0].url}
          thumbnail={product?.imagenes[0].url}
          width="1600"
          height="1600"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <img
              className={styles.first}
              src={product?.imagenes[0].url}
              ref={ref}
              onClick={open}
              alt=""
            />
          )}
        </Item>

        {product?.imagenes.map((image, i) => {
          if (i !== 0) {
            return (
              <Item
                original={image.url}
                thumbnail={image.url}
                width="1600"
                height="1068"
                alt="Photo of mountain lake by Samuel Rohl"
              >
                {({ ref, open }) => (
                  <img
                    className={styles.item}
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
    </Gallery>
  );
};

export default Grid;
