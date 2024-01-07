import PropTypes from "prop-types";
export const CardImage = ({ imagePath, styles }) => {
  return (
    <div>
      <img src={imagePath} className={styles} alt="Weather Icon" />
    </div>
  );
};

CardImage.propTypes = {
  imagePath: PropTypes.any,
  styles: PropTypes.any,
};
