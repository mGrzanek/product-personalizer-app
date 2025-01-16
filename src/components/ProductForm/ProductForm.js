import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionSize from './../OptionSize/OptionSize.js';
import OptionColor from './../OptionColor/OptionColor.js';
import Button from '../Button/Button';

const ProductForm = ({ name, price, sizes, currentSize, setCurrentSize, colors, currentColor, setCurrentColor }) => {
  const addToCart = (e) => {
    e.preventDefault();
    console.log((
      `
      Summary:
      =========
      Name: ${name}
      Price: ${price}$
      Size: ${currentSize}
      Color: ${currentColor}
      `
    ));
  };

  return(
      <form onSubmit={addToCart}>
        <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
        <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
  );
}

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
}

export default ProductForm;