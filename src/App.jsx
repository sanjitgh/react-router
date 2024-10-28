import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NaveBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
    </>
  );
}

export default App;
