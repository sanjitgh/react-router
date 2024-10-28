import {
  BarChart as BChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChart = () => {
  const Marks = [
    {
      id: 1,
      name: "Alice",
      chemistry_mark: 78,
      math_mark: 88,
      physics_mark: 82,
    },
    { id: 2, name: "Bob", chemistry_mark: 85, math_mark: 76, physics_mark: 90 },
    {
      id: 3,
      name: "Charlie",
      chemistry_mark: 92,
      math_mark: 95,
      physics_mark: 91,
    },
    {
      id: 4,
      name: "David",
      chemistry_mark: 68,
      math_mark: 72,
      physics_mark: 65,
    },
    {
      id: 5,
      name: "Ella",
      chemistry_mark: 74,
      math_mark: 80,
      physics_mark: 78,
    },
    {
      id: 6,
      name: "Frank",
      chemistry_mark: 81,
      math_mark: 84,
      physics_mark: 79,
    },
    {
      id: 7,
      name: "Grace",
      chemistry_mark: 89,
      math_mark: 92,
      physics_mark: 88,
    },
    {
      id: 8,
      name: "Hannah",
      chemistry_mark: 95,
      math_mark: 89,
      physics_mark: 94,
    },
    { id: 9, name: "Ian", chemistry_mark: 72, math_mark: 75, physics_mark: 70 },
    {
      id: 10,
      name: "Julia",
      chemistry_mark: 87,
      math_mark: 90,
      physics_mark: 85,
    },
  ];
  return (
    <div className="container mx-auto py-20 px-3">
      <h1 className="text-5xl font-bold mb-16 text-center">Bar Chat Subject numbers:</h1>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <BChart data={Marks}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <CartesianGrid strokeDasharray={"2"} stroke="#C4D7FF" ></CartesianGrid>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey={"chemistry_mark"} fill="#1B4242"></Bar>
            <Bar dataKey={"physics_mark"} fill="#5C8374"></Bar>
            <Bar dataKey={"math_mark"} fill="#9EC8B9"></Bar>
          </BChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
