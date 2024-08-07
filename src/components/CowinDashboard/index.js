// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CowinDashboard extends Component {
  state = {
    lastSevenDaysVaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
    status: apiConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({status: apiConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(apiUrl)
    if (response.ok) {
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
      this.setState({
        lastSevenDaysVaccination,
        vaccinationByGender,
        vaccinationByAge,
        status: apiConstants.success,
      })
    } else {
      this.setState({status: apiConstants.failure})
    }
  }

  successView = () => {
    const {
      lastSevenDaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = this.state
    return (
      <>
        <VaccinationCoverage
          lastSevenDaysVaccination={lastSevenDaysVaccination}
        />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  loadingView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  failureView = () => (
    <div className="failure-view-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="something-went-wrong">Something Went Wrong</h1>
    </div>
  )

  getViews = () => {
    const {status} = this.state
    switch (status) {
      case apiConstants.success:
        return this.successView()
      case apiConstants.loading:
        return this.loadingView()
      case apiConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
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
        {this.getViews()}
      </div>
    )
  }
}

export default CowinDashboard
