// Write your code here

import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashboard extends Component {
  state = {lastSevenDaysVaccination: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    // console.log(data)

    const lastSevenDaysVaccination = data.last_7_days_vaccination.map(
      each1 => ({
        vaccineDate: each1.vaccine_date,
        dose1: each1.dose_1,
        dose2: each1.dose_2,
      }),
    )
    const vaccinationByAge = data.vaccination_by_age.map(each2 => ({
      age: each2.age,
      count: each2.count,
    }))
    const vaccinationByGender = data.vaccination_by_gender.map(each3 => ({
      count: each3.count,
      gender: each3.gender,
    }))
    this.setState({lastSevenDaysVaccination})
  }

  render() {
    const {lastSevenDaysVaccination} = this.state
    return (
      <div className="bg-con">
        <div className="logo-con">
          <img
            alt="website logo"
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <h1 className="cowin-heading">Co-WIN</h1>
        </div>
        <h1 className="cowin-vaccination">CoWIN Vaccination in India</h1>
        <VaccinationCoverage
          lastSevenDaysVaccination={lastSevenDaysVaccination}
        />
      </div>
    )
  }
}

export default CowinDashboard
