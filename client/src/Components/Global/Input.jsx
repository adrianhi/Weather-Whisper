import PropTypes from "prop-types";
export const Input = ({ type, name, register, placeholder }) => {
  return (
    <input
      type={type}
      {...register(name, { required: true })}
      placeholder={placeholder}
      className="w-full  px-4 py-2 border-blue-600  focus:border-blue-500 focus:outline-none mx-3 my-3"
    />
  );
};

Input.propTypes = {
  type: PropTypes.any,
  name: PropTypes.string,
  register: PropTypes.any,
  placeholder: PropTypes.string,
};
