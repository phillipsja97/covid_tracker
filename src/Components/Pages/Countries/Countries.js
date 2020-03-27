/* eslint-disable max-len */
import React from 'react';
import allData from '../../../Helpers/Data/allData';

class Countries extends React.Component {
  state = {
    data: [],
    options: [],
  }

  dropdownOptions = () => {
    const options = this.state.data.map((d) => d.Countries.map((country) => <option key={country.id} value={country.Country}>{country.Country}</option>));
    this.setState({ options });
  }

  componentDidMount() {
    allData.getAllData()
      .then((data) => {
        this.setState({ data });
        this.dropdownOptions();
      })
      .catch((errorFromGetData) => console.error(errorFromGetData));
  }

  render() {
    const { options } = this.state;
    return (
      <div className="Countries">
        <h1 className="text-center">Covid-19 Tracker</h1>
          <div class="form-group">
             <label for="exampleFormControlSelect1">Countries</label>
             <select class="form-control" id="exampleFormControlSelect1">
               {options}
             </select>
         </div>
      </div>
    );
  }
}

export default Countries;
