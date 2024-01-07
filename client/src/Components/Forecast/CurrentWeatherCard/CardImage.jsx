import PropTypes from "prop-types";
export const CardImage = ({ imagePath }) => {
  return (
    <div>
      <img src={imagePath} alt="Weather Icon" />
    </div>
  );
};

CardImage.propTypes = {
  imagePath: PropTypes.any,
};
