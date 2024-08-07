// Write your code here

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {lastSevenDaysVaccination} = props

  console.log(lastSevenDaysVaccination)
  return (
    <>
      <h1 className="heading">Vaccination Coverage</h1>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={lastSevenDaysVaccination}>
          <XAxis dataKey="vaccineDate" />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <Legend
            iconType="star"
            verticalAlign="bottom"
            layout="horizontal"
            align="center"
            wrapperStyle=""
          />
          <Bar name="dose1" fill="#2d87bb" dataKey="dose1" barSize="100%" />
          <Bar name="dose2" fill="#f54394" dataKey="dose2" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default VaccinationCoverage
