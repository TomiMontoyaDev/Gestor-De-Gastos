import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const data = [
  { name: "Alquiler", value: 400 },
  { name: "Comida", value: 300 },
  { name: "Transporte", value: 200 },
  { name: "Otros", value: 100 },
  { name: "Entretenimiento", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function GastosChart() {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [colorList, setColorList] = useState([]);

  const handleAddColor = () => {
    setColorList([...colorList, currentColor]);
    COLORS.push(ColorPickerList);
  };

  return (
    <>
      <PieChart width={280} height={280}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

     
    </>
  );
}

export default GastosChart;
