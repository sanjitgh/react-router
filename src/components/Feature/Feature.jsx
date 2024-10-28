import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <li className="flex items-center gap-3 text-start">
      <FaCheckCircle />
      {feature}
    </li>
  );
};
Feature.propTypes = {
  feature: PropTypes.object,
};
export default Feature;
