// Write your code here

import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  console.log(vaccinationByGender)
  return (
    <>
      <h1 className="heading">Vaccination By Gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={vaccinationByGender}
            dataKey="count"
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={180}
            innerRadius="30%"
            outerRadius="70%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#2d87bb" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            align="center"
            iconType="square"
            verticalAlign="bottom"
            layout="horizontal"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationByGender
