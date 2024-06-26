import { PieChart, Pie, Cell, Legend } from "recharts";

import "./index.css";

const PieChartTask = (props) => {
  const { pieChartData, selectMonth, months, changeMonth } = props;
  const changeMonthText = (event) => {
    changeMonth(event);
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate an array of random colors based on the number of data points
  const colors = pieChartData.map(() => getRandomColor());
  return (
    <div className="pieChart-container">
      <div className="pieChart-header-container">
        <h1 className="pieChart-header">Pie Chart Stats - </h1>
        <select
          value={selectMonth}
          onChange={changeMonthText}
          className="select-month"
        >
          {months.map((eachMonth) => (
            <option
              key={eachMonth.value}
              value={eachMonth.value}
              className="checked-text"
            >
              {eachMonth.displayText}
            </option>
          ))}
        </select>
      </div>
      <PieChart width={1000} height={400}>
        <Pie
          data={pieChartData}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          dataKey="items"
          nameKey="category"
          label
        >
          {pieChartData.map((eachCell, index) => (
            <Cell name={eachCell.category} fill={colors[index]} />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            fontSize: 16,
            fontFamily: "Roboto",
          }}
        />
      </PieChart>
    </div>
  );
};

export default PieChartTask;
