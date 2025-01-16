import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {
  const [currentColor, setCurrentColor]= useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = arg => {
    return styles['color' + arg[0].toUpperCase() + arg.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    const currentOption = sizes.find(size => size.name === currentSize);
    return basePrice + currentOption.additionalPrice;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={ title }
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${ name }--${ currentColor }.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{ title }</h2>
          <span className={styles.price}>Price: { getPrice() }$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => 
              <li key={size.id}>
                <button onClick={() => setCurrentSize(size.name)} type="button" className={clsx(size.name === currentSize && styles.active)}>
                  {size.name}
                </button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => 
              <li key={color.id}>
                <button onClick={() => setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}></button>
              </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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