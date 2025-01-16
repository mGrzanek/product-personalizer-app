import styles from './../ProductForm/ProductForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
    const prepareColorClassName = arg => {
        return styles['color' + arg[0].toUpperCase() + arg.substr(1).toLowerCase()];
    };

    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map(color => 
                <li key={color}>
                <button onClick={() => setCurrentColor(color)} type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}></button>
                </li>)}
            </ul>
        </div>
    );
}

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
}

export default OptionColor;