import PropTypes from "prop-types";
import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
  const { name, price, feature } = option;
  return (
    <div className="bg-blue-600 p-10 text-center rounded space-y-5 text-white flex flex-col">
        <h1>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold">/month</span>
        </h1>
        <h1 className="text-4xl">{name}</h1>
        <ul className=" text-lg text-slate-200 space-y-2 flex-grow">
        {
            feature.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
        }
        </ul>
        <div className="text-start">
            <button className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none">Buy Now</button>
        </div>
    </div>
);
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
