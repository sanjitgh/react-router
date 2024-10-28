import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { ThreeDots } from "react-loader-spinner";

const Phones = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhone(phoneWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-3 py-20">
      <h1 className="text-5xl font-bold text-center mb-16">
        Phones : {phone.length}
      </h1>
      {loading && (
        <div className="flex justify-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}

      <div className="w-full h-96">
        <ResponsiveContainer>
          <BarChart data={phone}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey={"price"} fill="#1B4242"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Phones;
