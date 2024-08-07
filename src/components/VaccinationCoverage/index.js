// Write your code here

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {lastSevenDaysVaccination} = props

  return (
    <div className="vaccination-con">
      <h1 className="heading">Vaccination Coverage</h1>

      <BarChart width={1200} height={300} data={lastSevenDaysVaccination}>
        <XAxis dataKey="vaccine_date" />
        <YAxis
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <Legend
          iconType="square"
          verticalAlign="bottom"
          layout="horizontal"
          align="center"
          wrapperStyle=""
        />
        <Bar name="dose_1" fill="#2d87bb" dataKey="dose_1" barSize="20%" />
        <Bar name="dose_2" fill="#f54394" dataKey="dose_2" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
