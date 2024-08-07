// Write your code here

import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <div className="vaccination-con">
      <h1 className="heading">Vaccination By Age</h1>

      <PieChart width={1200} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius={0}
          outerRadius="50%"
          data={vaccinationByAge}
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend
          align="center"
          iconType="circle"
          verticalAlign="bottom"
          layout="horizontal"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
