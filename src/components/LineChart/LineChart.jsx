import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const LineChart = () => {
  const subjectMarks = [
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
      <h1 className="text-5xl font-bold mb-16 text-center">Line Chart Subject numbers:</h1>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <LChart data={subjectMarks}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5"></CartesianGrid>
            <Line dataKey={"chemistry_mark"} stroke="#133E87" />
            <Line dataKey={"physics_mark"} stroke="#22c55e" />
            <Line dataKey={"math_mark"} stroke="#ff41c7" />
          </LChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
