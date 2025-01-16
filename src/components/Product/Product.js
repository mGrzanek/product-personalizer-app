import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './../ProductImage/ProductImage.js';
import ProductForm from './../ProductForm/ProductForm.js';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor]= useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const currentOption = sizes.find(size => size.name === currentSize);
    return basePrice + currentOption.additionalPrice;
  }

  const addToCart = (e) => {
    e.preventDefault();
    console.log((
      `
      Summary:
      =========
      Name: ${name}
      Price: ${getPrice()}
      Size: ${currentSize}
      Color: ${currentColor}
      `
    ))
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{ title }</h2>
          <span className={styles.price}>Price: { getPrice() }$</span>
        </header>
        <ProductForm 
          addToCart={addToCart} 
          currentColor={currentColor}
          colors={colors} 
          sizes={sizes} 
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