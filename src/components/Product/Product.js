import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './../ProductImage/ProductImage.js';
import ProductForm from './../ProductForm/ProductForm.js';

const Product = ({ name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor]= useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => {
    const currentOption = sizes.find(size => size.name === currentSize);
    return basePrice + currentOption.additionalPrice;
  }, [currentSize, sizes, basePrice]);

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{ title }</h2>
          <span className={styles.price}>Price: { price }$</span>
        </header>
        <ProductForm 
          price={price} 
          name={name}
          currentColor={currentColor}
          colors={colors} 
          sizes={sizes} 
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}/>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired
}

export default Product;